document.getElementById("theme-toggle")?.addEventListener("click", () => {
  const cur = document.documentElement.dataset.theme || "light"
  const next = cur === "dark" ? "light" : "dark"
  document.documentElement.dataset.theme = next
  localStorage.setItem("theme", next)
})

// Sidenotes: extract footnote definitions and position them next to their references.
function setupSidenotes() {
  const sidenotesEl = document.querySelector(".sidenotes")
  const footnotesSection = document.querySelector(".post .footnotes")
  if (!sidenotesEl || !footnotesSection) return
  // Only run when there's enough space (matches the CSS breakpoint).
  if (window.innerWidth < 1461) {
    sidenotesEl.innerHTML = ""
    return
  }
  sidenotesEl.innerHTML = ""

  const defs = footnotesSection.querySelectorAll("li[id^='footnote-']")
  if (!defs.length) return

  const wrap = sidenotesEl.getBoundingClientRect()
  const items = []
  defs.forEach((li, i) => {
    const id = li.id
    const ref = document.querySelector(`sup a[href="#${id}"]`)
    if (!ref) return
    const refRect = ref.getBoundingClientRect()
    const top = refRect.top - wrap.top

    const node = document.createElement("div")
    node.className = "sidenote"
    node.dataset.refId = ref.id
    const clone = li.cloneNode(true)
    const back = clone.querySelector("a[data-footnote-backref]")
    if (back) back.remove()
    node.innerHTML = `<span class="num">${i + 1}</span>${clone.innerHTML}`
    sidenotesEl.appendChild(node)
    items.push({ node, top, ref })
  })

  // Resolve vertical collisions: each item starts at its ref's top; if it overlaps
  // the previous one, push it down.
  let prevBottom = -Infinity
  for (const it of items) {
    let top = Math.max(it.top, prevBottom + 8)
    it.node.style.top = `${top}px`
    prevBottom = top + it.node.offsetHeight
  }

  // Hover sync (ref ↔ sidenote)
  items.forEach((it) => {
    const enter = () => { it.node.classList.add("active"); it.ref.classList.add("active") }
    const leave = () => { it.node.classList.remove("active"); it.ref.classList.remove("active") }
    it.ref.addEventListener("mouseenter", enter)
    it.ref.addEventListener("mouseleave", leave)
    it.node.addEventListener("mouseenter", enter)
    it.node.addEventListener("mouseleave", leave)
  })
}

if (document.querySelector(".sidenotes")) {
  // Wait for fonts/math/images so offsets are accurate.
  if (document.readyState === "complete") setupSidenotes()
  else window.addEventListener("load", setupSidenotes)
  let resizeTimer
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(setupSidenotes, 150)
  })
}

// ToC scroll-spy
const tocLinks = document.querySelectorAll(".toc a[href^='#']")
if (tocLinks.length) {
  const targets = [...tocLinks].map((a) => document.getElementById(decodeURIComponent(a.getAttribute("href").slice(1)))).filter(Boolean)
  const linkFor = (id) => document.querySelector(`.toc a[href="#${CSS.escape(id)}"]`)
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const link = linkFor(e.target.id)
      if (!link) return
      if (e.isIntersecting) {
        document.querySelectorAll(".toc a.active").forEach((a) => a.classList.remove("active"))
        link.classList.add("active")
      }
    })
  }, { rootMargin: "0px 0px -70% 0px", threshold: 0 })
  targets.forEach((t) => io.observe(t))
}
