import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import matter from "gray-matter"
import { Marked } from "marked"
import markedFootnote from "marked-footnote"
import katex from "katex"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = __dirname
const CONTENT_DIR = path.resolve(ROOT, "content")
const OUT_DIR = path.resolve(ROOT, "dist")
const STATIC_DIR = path.resolve(ROOT, "static")

const SITE_TITLE = "Rauno Arike"
const AUTHOR_NAME = "R. Arike"

function highlightAuthor(escapedAuthors) {
  return escapedAuthors.replace(
    new RegExp(AUTHOR_NAME.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
    `<strong>${AUTHOR_NAME}</strong>`,
  )
}

// ---------- markdown setup ----------
const marked = new Marked({ gfm: true, breaks: false })
marked.use(markedFootnote())

// KaTeX rendering: replace $$...$$ and $...$ with rendered HTML before/after markdown.
// We use placeholder tokens to avoid interference from markdown processing.
function renderMath(src) {
  const placeholders = []
  const stash = (html) => {
    const token = `@@MATH${placeholders.length}@@`
    placeholders.push(html)
    return token
  }

  // Block math: $$...$$
  src = src.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => {
    try {
      return stash(katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false, strict: false, trust: true, macros: KATEX_MACROS }))
    } catch {
      return _
    }
  })

  // Inline math: $...$ (avoid $$ already consumed, and avoid escaped \$)
  src = src.replace(/(^|[^\\$])\$([^\n$]+?)\$/g, (m, pre, tex) => {
    try {
      return pre + stash(katex.renderToString(tex, { displayMode: false, throwOnError: false, strict: false, trust: true, macros: KATEX_MACROS }))
    } catch {
      return m
    }
  })

  return { src, placeholders }
}

const KATEX_MACROS = {
  "\\RR": "\\mathbb{R}",
  "\\NN": "\\mathbb{N}",
  "\\ZZ": "\\mathbb{Z}",
  "\\QQ": "\\mathbb{Q}",
  "\\CC": "\\mathbb{C}",
}

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&(?:#\d+|#x[0-9a-f]+|[a-z]+);/gi, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80)
}

function mdToHtml(src) {
  const { src: prepped, placeholders } = renderMath(src)
  let html = marked.parse(prepped)
  html = html.replace(/@@MATH(\d+)@@/g, (_, i) => placeholders[Number(i)])
  // Add ids to h2/h3 and collect ToC entries.
  const toc = []
  const usedIds = new Set()
  html = html.replace(/<(h[23])>([\s\S]*?)<\/\1>/g, (_, tag, inner) => {
    let id = slugifyHeading(inner)
    if (!id) id = `heading-${toc.length}`
    let unique = id
    let n = 2
    while (usedIds.has(unique)) unique = `${id}-${n++}`
    usedIds.add(unique)
    toc.push({ level: tag === "h2" ? 2 : 3, id: unique, text: inner.replace(/<[^>]+>/g, "") })
    return `<${tag} id="${unique}"><a class="anchor" href="#${unique}">#</a>${inner}</${tag}>`
  })
  // Rewrite image src that points into the content/img directory or any local relative image.
  html = html.replace(/<img([^>]*?)\ssrc="(?!https?:|\/)([^"]+)"/g, (_, attrs, src) => {
    return `<img${attrs} src="/img/${src.replace(/^(\.\/)?img\//, "")}"`
  })
  // Process inline markdown links inside <figcaption> tags (marked treats raw HTML blocks as opaque).
  html = html.replace(/<figcaption>([\s\S]*?)<\/figcaption>/g, (_, inner) => {
    const converted = inner.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text, url) => {
      const isExternal = /^https?:\/\//.test(url)
      const attrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : ""
      return `<a href="${url}"${attrs}>${text}</a>`
    })
    return `<figcaption>${converted}</figcaption>`
  })
  // Rewrite local markdown links: foo.md -> /foo, "foo" (no ext) stays as-is if matches a slug.
  html = html.replace(/<a([^>]*?)\shref="(?!https?:|#|mailto:|\/)([^"]+)"/g, (m, attrs, href) => {
    const cleaned = href.replace(/\.md$/, "")
    return `<a${attrs} href="/${cleaned}"`
  })
  return { html, toc }
}

// ---------- file scanning ----------
function readContent() {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"))
  const pages = []
  for (const f of files) {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, f), "utf8")
    const parsed = matter(raw)
    const slug = f.replace(/\.md$/, "")
    const fm = parsed.data || {}
    if (fm.draft === true) continue
    pages.push({
      slug,
      title: fm.title || slug,
      date: fm.date ? new Date(fm.date) : null,
      categories: fm.category ? [].concat(fm.category) : [],
      notes: fm.notes || "",
      spotlight: fm.spotlight === true,
      tags: fm.tags || [],
      external_url: fm.external_url ? (/^https?:\/\//.test(fm.external_url) ? fm.external_url : `https://${fm.external_url}`) : null,
      authors: fm.authors || "",
      venue: fm.venue || "",
      description: fm.description || "",
      content: parsed.content,
      raw,
    })
  }
  return pages
}

// ---------- templates ----------
function layout({ title, body, slug, extraHead = "" }) {
  const isHome = slug === "index"
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}${title === SITE_TITLE ? "" : " — " + SITE_TITLE}</title>
<link rel="stylesheet" href="/styles.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" />
<link rel="alternate" type="application/rss+xml" title="${SITE_TITLE}" href="/rss.xml" />
${extraHead}
<script>
  (function() {
    var saved = localStorage.getItem('theme');
    var prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved || (prefers ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
  })();
</script>
</head>
<body>
<header class="site-header">
  <a class="site-title" href="/">${SITE_TITLE}</a>
  <nav class="site-nav">
    <a href="/blog">Blog</a>
    <button id="theme-toggle" aria-label="Toggle theme">◑</button>
  </nav>
</header>
<main class="${isHome ? "home" : "page"}">
${body}
</main>
<script src="/script.js"></script>
</body>
</html>`
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c])
}

function fmtDate(d) {
  if (!d) return ""
  // Frontmatter dates parse as UTC midnight; format in UTC so they don't shift a day.
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" })
}

function byDateDesc(a, b) {
  const ta = a.date ? a.date.getTime() : 0
  const tb = b.date ? b.date.getTime() : 0
  if (ta !== tb) return tb - ta
  // Same-day posts (e.g. parts of a sequence published together): later slug first, so
  // part 2 sits above part 1, matching the reverse-chronological order of the list.
  return (b.slug || "").localeCompare(a.slug || "")
}

// ---------- page rendering ----------
function renderToc(toc) {
  if (!toc.length) return ""
  // t.text comes from rendered HTML with tags stripped, so it is already escaped —
  // escaping again would print entities like &#39; literally.
  const items = toc.map((t) =>
    `<li class="toc-${t.level}"><a href="#${t.id}">${t.text}</a></li>`
  ).join("")
  return `<aside class="toc"><h3>Contents</h3><ul>${items}</ul></aside>`
}

function renderContentPage(page) {
  const { html, toc } = mdToHtml(page.content)
  const body = `
<div class="post-wrap">
  ${renderToc(toc)}
  <article class="post">
    <header class="post-header">
      <h1>${escapeHtml(page.title)}</h1>
      ${page.notes ? `<p class="post-note">${escapeHtml(page.notes)}</p>` : ""}
      ${page.date ? `<p class="post-meta"><time datetime="${page.date.toISOString()}">${fmtDate(page.date)}</time>${page.tags.length ? " · " + page.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join(" ") : ""}</p>` : ""}
    </header>
    <div class="post-body">
${html}
    </div>
  </article>
  <aside class="sidenotes" aria-hidden="true"></aside>
</div>`
  return layout({ title: page.title, body, slug: page.slug })
}

function renderList(title, items, { external = false, note = "" } = {}) {
  if (!items.length) return ""
  const lis = items.map((p) => {
    const href = external && p.external_url ? p.external_url : `/${p.slug}`
    const attrs = external && p.external_url ? ` target="_blank" rel="noopener noreferrer" class="external"` : ` class="internal"`
    return `<li>
      ${p.date ? `<span class="meta">${fmtDate(p.date)}</span>` : `<span class="meta"></span>`}
      <a href="${escapeHtml(href)}"${attrs}>${escapeHtml(p.title)}</a>
      ${p.notes ? `<span class="note">${escapeHtml(p.notes)}</span>` : ""}
    </li>`
  }).join("\n")
  return `<section class="post-list">
    <h2>${escapeHtml(title)}</h2>
    ${note ? `<p class="section-note">${escapeHtml(note)}</p>` : ""}
    <ul>${lis}</ul>
  </section>`
}

function renderAbout() {
  return `<section class="about">
  <p>Hi, I'm Rauno. I'm managing director and researcher at <a href="https://aether-ai-research.org/">Aether</a>, an AI safety research org currently working on LLM chain-of-thought monitorability. Before that, I completed an undergrad in CS at TU Delft, where I co-founded the <a href="https://www.delftaisafety.org/">Delft AI Safety Initiative</a>, and did a research fellowship at the <a href="https://www.matsprogram.org/">MATS program</a>.</p>
  <p class="socials">
    <a href="mailto:rauno.arike@gmail.com">Email</a>
    <a href="https://www.lesswrong.com/users/rauno-arike">LessWrong</a>
    <a href="https://scholar.google.com/citations?user=gJSs1EwAAAAJ&hl=en">Google Scholar</a>
    <a href="https://github.com/RaunoArike">GitHub</a>
    <a href="https://x.com/RaunoArike">Twitter</a>
    <a href="https://www.linkedin.com/in/rauno-arike/">LinkedIn</a>
  </p>
</section>`
}

function renderPapers(papers) {
  if (!papers.length) return ""
  const rows = papers.map((p) => {
    const href = p.external_url || `/${p.slug}`
    const titleLink = p.external_url
      ? `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer" class="external">${escapeHtml(p.title)}</a>`
      : `<a href="${escapeHtml(href)}">${escapeHtml(p.title)}</a>`
    return `<li class="paper">
      <div class="paper-title">${titleLink}</div>
      <div class="paper-authors">${highlightAuthor(escapeHtml(p.authors))}</div>
      <div class="paper-venue">${escapeHtml(p.venue)}</div>
      <div class="paper-desc">${escapeHtml(p.description)}</div>
    </li>`
  }).join("\n")
  return `<section class="papers">
    <h2>Papers</h2>
    <ul class="papers-list">${rows}</ul>
  </section>`
}

const TALKS = [
  {
    url: "https://www.youtube.com/watch?v=erqRvkM21mg",
    title: "AI Safety Thursdays: Implications of Continual Learning in LLM Agents",
    note: "together with Rohan Subramani",
  },
  {
    url: "https://www.youtube.com/watch?v=39XJfbzBWPo",
    title: "AI Safety Thursdays: Chain-of-Thought Monitoring and AI Control",
    note: "together with Rohan Subramani",
  },
  {
    url: "https://www.youtube.com/watch?v=fLHtPUaXH8E",
    title: "AI Safety Thursdays: Estimating No-CoT Task-Completion Time Horizons of Frontier AI Models",
  },
]

function renderTalks(talks) {
  if (!talks.length) return ""
  const lis = talks.map((t) => `<li>
    <a href="${escapeHtml(t.url)}" target="_blank" rel="noopener noreferrer" class="external">${escapeHtml(t.title)}</a>${t.note ? ` <span class="talk-note">(${escapeHtml(t.note)})</span>` : ""}
  </li>`).join("\n")
  return `<section class="post-list">
    <h2>Talks</h2>
    <ul>${lis}</ul>
  </section>`
}

function renderHome(pages) {
  const has = (p, tag) => (p.tags || []).includes(tag)
  const papers = pages.filter((p) => has(p, "paper")).sort(byDateDesc)
  // The home page shows only the handful of posts marked `spotlight: true` in
  // frontmatter; the full list lives on the blog page.
  const blogPosts = pages.filter((p) => p.spotlight).sort(byDateDesc)

  const body = `
${renderAbout()}
${renderPapers(papers)}
${renderList("Blog spotlight", blogPosts, { external: true })}
${renderTalks(TALKS)}`
  return layout({ title: SITE_TITLE, body, slug: "index" })
}

// Columns of the blog index and the thematic categories within them, in display order.
// Each post declares one or more categories in frontmatter; a post listed under several
// categories appears in each of them.
const BLOG_COLUMNS = [
  {
    title: "AI Alignment",
    categories: [
      { key: "cot-monitoring", title: "CoT Monitoring" },
      {
        key: "continual-learning",
        title: "Continual Learning",
        note: "all with Rohan Subramani, Owen Terry, Achu Menon, Zhijing Jin, Francis Rhys Ward, and Seth Herd",
      },
      { key: "character-training", title: "Character Training" },
      { key: "ai-safety", title: "Misc AI Safety Writing" },
    ],
  },
  {
    title: "Other",
    categories: [
      { key: "philosophy", title: "Philosophy" },
      { key: "reviews", title: "Reviews" },
      { key: "misc", title: "Misc" },
      { key: "links", title: "Links and Recommendations" },
      { key: "in-estonian", title: "Essays in Estonian" },
    ],
  },
]

function renderBlogIndex(pages) {
  const all = BLOG_COLUMNS.flatMap((col) => col.categories)
  const grouped = new Map(all.map((c) => [c.key, []]))
  const uncategorized = []
  for (const p of pages.filter((p) => p.date)) {
    const known = p.categories.filter((c) => grouped.has(c))
    if (known.length) known.forEach((c) => grouped.get(c).push(p))
    else if (!(p.tags || []).includes("paper")) uncategorized.push(p)
  }
  if (uncategorized.length) {
    console.warn(`Uncategorized posts: ${uncategorized.map((p) => p.slug).join(", ")}`)
  }
  const columns = BLOG_COLUMNS.map((col) => `<div class="blog-col">
    <h2 class="blog-col-title">${escapeHtml(col.title)}</h2>
    ${col.categories.map((c) => renderList(c.title, grouped.get(c.key).sort(byDateDesc), { external: true, note: c.note })).join("\n    ")}
  </div>`).join("\n  ")
  const body = `
<div class="blog-grid">
  ${columns}
</div>`
  return layout({ title: "Blog", body, slug: "blog" })
}

function renderRss(pages) {
  const items = pages
    .filter((p) => p.date && !p.external_url)
    .sort(byDateDesc)
    .slice(0, 30)
    .map((p) => `<item>
      <title>${escapeHtml(p.title)}</title>
      <link>https://example.com/${p.slug}</link>
      <guid>https://example.com/${p.slug}</guid>
      <pubDate>${p.date.toUTCString()}</pubDate>
    </item>`).join("\n")
  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"><channel>
<title>${SITE_TITLE}</title>
<link>https://example.com/</link>
<description>${SITE_TITLE}</description>
${items}
</channel></rss>`
}

// ---------- build ----------
function clean() {
  fs.rmSync(OUT_DIR, { recursive: true, force: true })
  fs.mkdirSync(OUT_DIR, { recursive: true })
}

function writeFile(p, content) {
  const full = path.join(OUT_DIR, p)
  fs.mkdirSync(path.dirname(full), { recursive: true })
  fs.writeFileSync(full, content)
}

function copyStatic() {
  // static assets
  for (const f of fs.readdirSync(STATIC_DIR)) {
    fs.copyFileSync(path.join(STATIC_DIR, f), path.join(OUT_DIR, f))
  }
  // images from content/img
  const imgSrc = path.join(CONTENT_DIR, "img")
  if (fs.existsSync(imgSrc)) {
    const dst = path.join(OUT_DIR, "img")
    fs.mkdirSync(dst, { recursive: true })
    for (const f of fs.readdirSync(imgSrc)) {
      fs.copyFileSync(path.join(imgSrc, f), path.join(dst, f))
    }
  }
}

function build() {
  console.time("build")
  clean()
  copyStatic()
  const pages = readContent()

  for (const page of pages) {
    if (page.slug === "index") continue
    // If page has an external_url, generate a redirect page (it's still linked from the home page externally).
    let html
    if (page.external_url) {
      html = layout({
        title: page.title,
        slug: page.slug,
        body: `<p>Redirecting to <a href="${escapeHtml(page.external_url)}">${escapeHtml(page.external_url)}</a>…</p>`,
        extraHead: `<meta http-equiv="refresh" content="0; url=${escapeHtml(page.external_url)}">`,
      })
    } else {
      html = renderContentPage(page)
    }
    writeFile(`${page.slug}/index.html`, html)
  }

  writeFile("index.html", renderHome(pages))
  writeFile("blog/index.html", renderBlogIndex(pages))
  writeFile("rss.xml", renderRss(pages))
  console.log(`Built ${pages.length} pages to ${OUT_DIR}`)
  console.timeEnd("build")
}

build()
