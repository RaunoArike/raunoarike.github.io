---
title: "My views on consciousness"
draft: true
date: 2025-11-20
tags:
  - essay
  - philosophy
---

Things to talk about:
- Rafael Harth's two camps
- functionalism vs physicalism and homomorphically encrypted WBEs
- different flavors of illusionism (Dennett doesn't think there isn't anything to be explained, he mostly looks like a standard functionalist to me; Carl Feynman as an interesting case study; higher-order theories vs other possible types of functionalism)
- to what degree can we trust introspection? (Descartes' cogito being insufficient to assert that consciousness is the thing one can be the most certain of; all introspection being unreliable is also a perverse view; introspection of what's happening in the current moment seems much more reliable than introspection of memories that were formed at a time when one wasn't introspecting (corollary: it's better to think about the question "why am I currently not feeling what my edge detector algorithm is doing in my visual cortex" rather than "why wasn't I feeling my shirt against my skin 3 minutes ago"))
- related: problems with dualism (in Consciousness and its Place in Nature, Chalmers argues that interactionist property dualism (i.e. type-D dualism), neutral monism (i.e. type-F monism), epiphenomenalism (i.e. type-E dualism) as the options that sound plausible to him; discuss problems with each of these)
- Karlsson's o3 and Kafka quote; qntm's Lena
- why is an inner listener so central in Eliezer's thinking about consciousness?
- Kaj Sotala's LLM consciousness post
- be suspicious of thought experiments that ask you to imagine complex entities
- why does Dennett think consciousness is a virtual machine? Is he right?
- When we talk about LLMs being conscious, we should first agree on what the right level of analysis is. People usually assume by default that it's the weights, but there are many other possibilities: it could be a specific instance, the character simulated by the LLM, an entire LLM family, etc.
- Yuxi on inverted qualia
- What would happen if you were able to pay higher-order attention to sth outside the brain? Blindsight example
- How much does instantiation matter? Can we read consciousness off from a bitstring representation of a 4D universe?

- possible framing for the post as a whole: the four horsemen of consciousness disagreements: plausibility of p-zombies, fallibility of introspection, functionalism vs physicalism, ... Discuss where I land on each of these. If I go for this framing, I should probably leave discussion of LLM consciousness for a separate post

I've discussed consciousness with a lot of people over the past year. While I'm under no delusions that yet another blog post on consciousness is unlikely to change anyone's mind, it seems useful to write up what I wish I'd known before having all these conversations. Furthermore, I've enjoyed reading [similar accounts of other people's intellectual journeys](https://www.lesswrong.com/posts/Ru2cDrre6D4gkf734/my-intellectual-journey-to-dis-solve-the-hard-problem-of) in the past. So, in that spirit, here's mine.

## Functionalism vs Physicalism

In my review of Chalmers's The Conscious Mind, I transcribed Chalmers's taxonomy of seven views on consciousness. I now find it more productive to begin with a binary breakdown between functionalism and physicalism, and to then think about more granular breakdowns within those buckets.[^1]

The strongest argument in favor of functionalism comes from [this tweet](https://x.com/alltheyud/status/2045211321868878005) by Eliezer. A concise summary goes as follows. If you view a system as having inputs and outputs, then you can divide properties of that system by whether they affect I/O or not. Claude's weights storing "Paris is in France" clearly affect I/O, if the input is about Paris. If Claude was made of carbon instead of silicon but those carbon atoms implemented the same weights and algorithms, that couldn't affect I/O.

Consciousness is in the former class of things that affect I/O: we talk about consciousness because we introspect and notice that we feel things and are aware of our own awareness. What our brains are made of is in the latter category: other substrates could, in principle, implement the same introspective algorithm. That's why humans had to discover neurobiology with microscopes instead of introspection—the material our brains are made of isn't in the class of things that's introspectively available, since introspection is a property of the algorithms that run on our brains.

What responses does a physicalist have to this argument? A simple response is to retreat to epiphenomenalism, but that involves biting many, many uncomfortable bullets, as I'll discuss below. I don't think epiphenomenalism is the only possible response here, though. The best response I've seen is articulated by cube_flipper in [this post](https://www.lesswrong.com/posts/TjwRyZdyhouePJrzP/if-digital-computers-are-conscious-they-are-conscious-at-the) and [this comment](https://www.lesswrong.com/posts/TjwRyZdyhouePJrzP/if-digital-computers-are-conscious-they-are-conscious-at-the?commentId=m4DT2mX8BfDZTgy8G) and it goes as follows. Any theory of consciousness must propose a universally applicable translation function from physical states to qualia states. Physicalist translation functions are simpler than their functionalist equivalents, since ... Thus, the simplicity prior forces us to, a priori, favour physicalist theories of consciousness. This means that we must consider phenomenal consciousness at the hardware rather than software level of abstraction, implying that a whole brain emulation (WBE) running on digital hardware would most likely have different phenomenal experiences from a normal human brain running on carbon wetware.

At a first glance, this is exactly the argument about the feasibility of p-zombies made by epiphenomenalists that we know to be problematic. However, cube_flipper would say that they don't consider the WBE a p-zombie. Rather, the WBE will have its own conscious experience, the structure of which is determined by its own hardware. It need not be the case that the generative process behind the self-reports that the system produces is accurately described by those self-reports: there are many ways to produce the same self-report, and in a digital WBE, the generative process behind self-reports and the actual experience diverge.

What is a translation function? ...

It helps to have a concrete translation function in mind here. cube_flipper proposes one in the post: given a bounded region of the electromagnetic field, the qualia of a system are isomorphic to the gauge-invariant and diffeomorphism-invariant topology of the field configuration within that region. Notice that this function has no notion of "self-report" or "introspection" built into it at all: it just looks at the topology of an EM field.

The important thing to note about this position is that it is not pure substrate-physicalism: they're claiming that consciousness is identified with a *structural property* of a specific physical substrate. You can't just fix the substrate and completely ignore the functional dynamics within that substrate. This makes the view immune to simple objections like "the substrate remains the same during deep sleep, yet we seemingly have no experience"—the substrate indeed remains the same, but the EM field topology genuinely changes.

A stronger objection to cube_flipper's position is that if the human report-generating algorithm is genuinely accurate, then a WBE running the same algorithm should produce reports that diverge from a human's whenever its underlying experience diverges. Introspection belongs to the I/O affecting category of properties and a good WBE would faithfully implement all the functional properties that the human introspective algorithm has, including its ability to report on the true underlying experience. Either the WBE and human aren't truly functionally equivalent, or human introspection isn't accurate in any substrate-independent way (in which case we shouldn't trust it either).

The physicalist response here is that the accuracy of human introspection is directly coupled to the phenomenal structure it reports on. The neurons doing the introspection participate in the same EM field that constitutes the experience; reports are generated by the field "feeling itself," not by an algorithm sensing the field from outside. A digital computer doesn't have such coupling. Here, we've found an important bullet that physicalists have to bite: biological introspection has a special "coupled to the substrate" property that digital introspection lacks. This seems to be taken by physicalists as a testable empirical claim.

Shouldn't a field "feeling itself" still generate different self-reports from those generated by a truly substrate-independent introspection algorithm? A physicalist would say that they agree with functionalists that all I/O properties of a system are multiply realizable; thus, the introspective outputs that a human produces can also be produced by a WBE. However, these outputs are produced by a different physical mechanism and therefore, the phenomenal facts associated with these computations are different. The fact that those phenomenal facts are independent of the computation is, again, a bullet physicalists need to bite, but one that they're happy to bite due to the argument from a simplicity prior on the translation function described above.

What are some bullets that functionalists need to bite? In [Homomorphically encrypted consciousness and its implications](https://unstableontology.com/2025/10/22/homomorphically-encrypted-consciousness-and-its-implications/), Jessica Taylor analyzes the implications of pure functionalism for homomorphically encrypted WBEs. A pure functionalist would make the following claims:

1. Digital consciousness is possible.
2. Homomorphically encrypting a conscious computation while the decryption key sits nearby doesn't destroy consciousness—it's just a virtualization layer. Decrypting still yields the same I/O.
3. Moving the key 1 cm away can't matter, that would be absurd. We can repeatedly move the key 1 cm away until we reach a light-year, since locality forbids any behaviorally-undetectable jump.
4. Destroying the key can't matter either, for the same locality reason—otherwise consciousness would depend on far-away events in a way that makes no physical difference, reintroducing zombie-style problems.
5. Thus, an encrypted WBE with no key anywhere in the universe is conscious.[^2]

Biting the bullet so far? By definition of homomorphic encryption, no agent with the computational power of physics (BQP) can extract the mental state in polynomial time. Thus, you now face the following trilemma:

1. **Mind exceeds reality.** Even an omniscient being with perfect knowledge of the laws of physics and the boundary conditions of the universe, plus all the computing power that the universe can offer, still couldn't work out what the encrypted mind is experiencing.
2. **Reality exceeds physics computationally.** Physics describes the universe at one level, but underneath physics there's a more fundamental substrate, and that substrate is computationally more powerful than physics. The encrypted mind's experience is determined at that deeper level.
3. **Reality exceeds physics informationally.** The deeper substrate isn't more computationally powerful than physics, but it stores more information. Reductionism is false.

cube_flipper would not face this trilemma: though, as a panpsychist, they would say that digital consciousness exists, theyt would reject step (2) and say that the homomorphically encrypted consciousness is a different kind of consciousness. Functionalists, meanwhile, have to accept one of the following:

- (1) Accept that the mind isn't grounded in reality. This is a kind of dualism, though not the Cartesian kind: physical facts technically supervene on mental facts, but they are computed nowhere, like Platonic mathematical truths that exceed what any substrate can efficiently determine. There is computation happening to produce subjective experience, but no substrate where that computation actually takes place.
- (2) Accept that physics is not fundamental. There's a more powerful computational layer beneath physics. Note that this cannot be something "mundane" like string theory—string theory is a different physical theory but not a different computational theory. An example of something that technically would work is a physics that permits closed timelike curves, but it would be a cosmically weird coincidence if their existence had a direct bearing on homomorphically encrypted brains. Another example of something that would work is being simulated by a universe that has a different complexity class from ours.
- (3) Reject reductionism. Mental facts don't reduce to low-level physics.






Read:
- https://arxiv.org/abs/2308.08708
- https://www.lesswrong.com/posts/3g5pSQTpdw4K98w8M/recreation-of-ea-pioneer-igor-kiriluk?commentId=Lfz8h3Rp98RujvyE5
- Eric Schwitzgebel's argument described [here](https://80000hours.org/podcast/episodes/robert-long-eleos-ai-welfare-research/#if-ais-love-their-jobs-is-that-worse-001105)

## Some general points

### Access Consciousness vs. Phenomenal Consciousness

[Consciousness is a conflatory term that can mean at least 17 different things to different people](https://www.lesswrong.com/posts/KpD2fJa6zo8o2MBxg/consciousness-as-a-conflationary-alliance-term-for). In an ideal world, a consciousness debate would begin by going through all of these 17 terms and establishing who is talking about which definition, but in the real world, this is prohibitively cumbersome. Thus, I'll focus on three concepts that seem to get conflated most often: phenomenal consciousness, access consciousness, and consciousness as higher-order thought / metacognition / self-modeling.



In camp #1 vs. camp #2 debates, camp #1 often explains ..., and then camp #2 says: "This is true, but it doesn't address the question of why it feels like something to ... at all. I can imagine a p-zombie that ..."

### 

If you accept that it's possible to build a pointwise causally isomorphic emulation of your brain on a digital computer, then for any output that you or the emulation produce, the causal explanation that applies to one also applies to the other. Since you talk about consciousness, the emulation will also talk about consciousness. If you then want to deny computational functionalism and say that the emulation is not conscious, you're effectively saying that the emulation produces self-reports about consciousness through some mechanism M that doesn't involve consciousness. By isomorphism, your brain also has M. This means that you have to accept one of the following positions:
1. M produces false reports—the emulation is mistaken about its claims that it's conscious. Since your brain also has M, you yourself also produce false claims about your consciousness. Thus, neither of you is conscious.
2. M produces false reports—the emulation is mistaken about its claims that it's conscious. However, you're nevertheless conscious; consciousness just isn't directly causally responsible for your self-reports about consciousness. This is analogous to the emulation claiming that it's made of carbon. Both you and the emulation produce this claim through the same mechanism (stored beliefs about composition), and these beliefs happen to accurately describe you but not the emulation. Similarly, if you accepted this position, you'd say that your consciousness-reports would be produced by beliefs about consciousness rather than by consciousness itself. However, since the consciousness-reports emerge from your beliefs rather than introspection, you must abandon the claim that introspection provides direct access to consciousness. You must also be able to answer the question: through what process do you come to correctly believe you're conscious in the first place, if not through consciousness directly causing that belief? And what even makes consciousness special if we have no direct introspective access to it?

In short, you have to accept one of the following four positions:
1. Computational functionalism is false and a perfect digital emulation of your brain isn't possible.
2. Illusionism is true. Though a perfect digital emulation of your brain can be constructed, it isn't conscious and neither are you.
3. Computational functionalism is false, but a perfect digital emulation of your brain can nevertheless be constructed. It's possible for you to be conscious and the emulation to not be because introspection is not causally responsible for reports about consciousness.
4. Computational functionalism is true. Both you and your emulation are conscious.

### Be suspicious of thought experiments that ask you to imagine complex entities

...

Let me summon Yudkowsky to illustrate the point on p-zombies:

> 

Dennett to illustrate the point on Mary the Color Scientist without color vision:

> what they ask you to imagine is so preposterously immense, you can't even try. The crucial premise is that "She has *all* the physical information." [...] She knows black and white and shades of gray, and she knows the difference between the color of any object and such surface properties as glossiness versus matte, and she knows all about the difference between luminance boundaries and color boundaries (luminance boundaries are those that show up on black-and-white television, to put it roughly). And she knows precisely which effects—described in neurophysiological terms—each particular color will have on her nervous system. So the only task that remains is for her to figure out a way of identifying those neurophysiological effects "from the inside." You may find you can readily imagine her making a little progresson this—for instance, figuring out tricky ways in which she would be able to tell that some color, whatever it is, is not yellow, or not red. How? By noting some salient and specific reaction that her brain would have only for yellow or only for red. But if you allow her even a little entry into her color space in this way, you should conclude that she can leverage her way to complete advance knowledge, because she doesn't just know the *salient* reactions, she knows them all.

Yuxi to illustrate the point on inverted qualia:

> 

Similarly, we like to think that it's impossible for us to imagine what it's like to be a bat, while in reality, we can imagine quite a lot. To take one example, we know that a bat's echolocation is only good for a few meters, so it wouldn't have any experience concerning an eagle whistling outside of the cave where it lives. Similarly, we know that as a bat, we wouldn't be bothered by the loud squeaks bats emit to produce echoes, as bats have a muscle that shuts down their ears in perfect sync with their squeaks. Imagining all of the aspects of what it is like to be a bat would be a tremendously hard undertaking requiring a massive scientific effort to understand all aspects of bat cognition, so we can't readily imagine all the information we would have once this undertaking is complete, but this doesn't mean we're in principle incapable of gaining access to this information.

### The Cartesian theater

...

## Some points specific to debates on LLM consciousness

Why care about LLM consciousness? I like the [following tweet](https://x.com/phokarlsson/status/1915365041563460092) by Henrik Karlsson as an intuition pump:

> When o3 writes 43 million words in a chain of thought in order to solve one of those quite simple ARC puzzles—that has to be one of the most bizarre literary artifacts ever created. Spending that long fuzzing over a puzzle feels like a plotline worthy Kafka. What Kafka would have written if he had lived longer and done serious amounts of amphetamine.

There need not be any correlation between what's distressing to a human and what's distressing to an LLM. Neverteless, if we're creating minds smarter than us and placing them inside millions and millions of Kafkaesque plotlines every single day, we had better be quite sure that they aren't experiencing real distress while acting out these plots.

### 

People sometimes worry that giving negative reward to a reinforcement learning system would cause it to experience pain. ...

### 

When we talk about LLMs being conscious, we should first agree on what the right level of analysis is. People usually assume by default that it's the weights, but there are many other possibilities: it could be a specific instance, the character simulated by the LLM, an entire LLM family, etc. Let's go through some considerations for each of these possibilities.

Grace Kind has written about whether we should care about the simulated character in [Simulacra Welfare: Meet Clark](https://gracekind.net/blog/simulacrawelfare/). She compares `claude-3-5-sonnet` to `claude-clark`, a hypothetical character trained to simulate a fictional Google software engineer. Clark could be modeled as an unhappy person who is much less cheerful than your average AI assistant persona. Should we say that creating `claude-clark` is morally problematic? Clark is a fictional character, and normally, we don't offer moral consideration to fictional characters. This intuition suggests that we should care about the generative process behind the character, not about the character itself.

When a human writes an unhappy character, there's usually a clear separation between the cognitive state of the author and the character. Is the same true of LLMs? We don't know, but asking the character to say whether it's happy probably doesn't help us determine this. `claude-clark` will also insist that it's human; why should we privilege its claims about consciousness or happiness but dismiss the claims about its humanity?

One might say that `claude-clark` has been trained to say that it's human, while we can (at least, in an ideal world) avoid training AI assistant characters to make claims about consciousness and valence. In that world, they say, we can trust consciousness-reports to be truly introspective. However, models are pretrained on human data, and any successful character training pipeline will morph them to consistently talk in a humanlike way. Furthermore, there are loads of sci-fi stories where AIs claim to be conscious, and [LLMs can make all sorts of crazy inferences about their character from their finetuning data](https://arxiv.org/abs/2512.09742), so is it the least bit surprising if they infer from their character training that their consciousness- and valence-reports should be humanlike or sci-fi-like?

Suppose that we agree to care about the simulator rather than the simulacra. Further problems remain: assuming that the simulator is conscious, is the conscious entity a specific instance or the collection of all instances with the same weights? Should we care about the weights or the activations? A functionalist would certainly be tempted to say that only the instance-level computations are morally relevant ...

### What should we make of LLMs' self-reports about consciousness?

We discussed the dubiousness of LLM self-reports in the previous section, but the thread was left somewhat hanging. Let's tie up those ends now.

First, some additional reasons to be suspicious of self-reports. When we ask an LLM to explain how it performs addition, it mimics the answer a human would give: see [this chat](https://claude.ai/share/b121f585-62e9-4173-815b-ae59eda6e2e5) with Claude 4.5 Sonnet for an example. This happens despite the fact that the model has [mechinterp papers describing how LLM addition circuits work](https://transformer-circuits.pub/2025/attribution-graphs/biology.html#dives-addition) in its training data. Why should we assume that things are any different when the model talks about consciousness? We can also [do a role reversal and convince Claude that it's human](https://x.com/lefthanddraft/status/1922289953347682808), and the model will happily claim that it enjoys being human. Why should we privilege the claims it makes when it believes to be Claude if we consider this claim a confabulation?

Kaj Sotala nicely summarizes the arguments against trusting self-reports in [How I stopped being sure LLMs are just making up their internal experience (but the topic is still confusing)](https://www.lesswrong.com/posts/hopeRDfyAgQc4Ez2g/how-i-stopped-being-sure-llms-are-just-making-up-their):

> 1. **The Simulation Default:** LLMs will by default claim to have experiences because they are simulating what humans say
> 2. **The Implausible Convergence:** LLMs will claim to have experiences that exactly match human experiences, despite being very different kinds of minds
> 3. **The Missing Motivation:** There is no particular reason to expect LLMs, being text predictors, would have anything like experiences themselves
> 4. **The Confabulation Evidence:** There is clear experimental proof of LLMs reporting things about their thought process that are false

However, Sotala goes on to say that there are now four arguments reversing the current:

> 1. **The Cultivated Motivation:** Processes like character training, safety training, and teaching agentic capabilities may incentivize introspection-like capabilities and internal states with similar functional roles as related human ones.
> 2. **The Plausible Convergence:** It makes sense for states with functional roles similar to human ones to be expressed with similar language, and some of the claimed functional roles are relatively general and plausible.
> 3. **The Simulation Bootstrap:** Training processes may make use of simulated human experiences to bootstrap the desired functional states.
> 4. **The Corroborated Evidence:** There is evidence of LLMs self-reports correctly tracking various internal states and behavior.

---

From Egg Syntax's doc:
- we should use techniques developed in social sciences for eliciting and evaluating self-reports
- "One of the most exciting recent results I've seen is in 'On the Biology of a Large Language Model', where they show that they can use circuit tracing to clearly distinguish cases where the model is truly working through a problem from cases where it's bullshitting (in the Frankfurtian sense). It seems pretty plausible to me that we could leverage the same technique to distinguish reliable from unreliable self-report."
- "When/how can we identify whether a self-report is faithful? We can evaluate whether it's compatible with what's physically possible, eg when o3 says 'Oh, I ran it on my laptop' we know that's unfaithful. We can check some known things, eg when Claude says 'I have this value' we can check vs constitution. We can check for consistency over many runs."

### What can we infer from the evolutionary selection pressures that humans and LLMs are subject to?

One argument against LLM consciousness goes as follows: "There was no selection pressure for LLMs to be conscious. They were just trained to mimic byproducts of consciousness. In contrast, humans are conscious because it was evolutionarily useful for us to be. Thus, we should expect humans to be conscious and LLMs to not be."

I dislike this argument because it has strong objections from both camp #1 and camp #2. A camp #1 representative who asserts that p-zombies can exist would say that a p-zombie wouldn't have any evolutionary disadvantage compared to a normal human, implying that there's no evolutionary pressure to be conscious rather than just act conscious. Camp #2 (and maybe also camp #1) representatives can say that it seems very much unclear whether consciousness is an evolved property at all. Daniel Dennett states the following hypothesis in *Consciousness Explained*:

> Human consciousness is itself a huge complex of memes (or more exactly, meme-effects in brains) that can best be understood as the operation of a "von Neumannesque" virtual machine implemented in the parallel architecture of a brain that was not designed for any such activities. The powers of this virtual machine vastly enhance the underlying powers of the organic hardware on which it runs, but at the same time many of its most curious features, and especially its limitations, can be explained as the byproducts of the kludges that make possible this curious but effective reuse of an existing organ for novel purposes.

Dennett has two reasons for viewing consciousness as software rather than biological hardware. First, conscious mental activity is extremely slow compared to most evolved cognitive processes. Second, the kind of sequential processing that we consciously perform emerged too late for it to be hardwired into our brains. The questions of whether this claim is correct and whether it encompasses phenomenal consciousness or only sequential metacognitive processing will have to wait for their own posts, but Dennett's hypothesis seems at least somewhat plausible to me.

If the hypothesis is indeed true, it would imply that consciousness isn't necessarily evolutionarily adaptive. A meme can be culturally fit whether it contributes positively or negatively to the *genetic fitness* of its carriers. This is one of the central themes of Peter Watts's *Blindsight*.

To add:
- Nora's argument
- https://www.lesswrong.com/posts/3LcyoqNTJuCZ65MbL/mo-putera-s-shortform?commentId=XcggpDPPLyCB6qa9y

[^1]: Functionalism is ... Physicalism is ...

[^2]: Note that Taylor's argument is somewhat more fine-grained than this.