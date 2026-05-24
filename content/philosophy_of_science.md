---
title: "Kuhn, Popper, Yudkowsky, and Deutsch on Philosophy of Science (draft)"
draft: true
date: 2024-10-30
tags:
  - essay
  - philosophy
---

Thomas Kuhn writes in *The Structure of Scientific Revolutions*:

> A scientific theory is usually felt to be better than its predecessors not only in the sense that it is a better instrument for discovering and solving puzzles but also because it is somehow a better representation of what nature is really like. One often hears that successive theories grow ever closer to, or approximate more and more closely to, the truth. [...] There is, I think, no theory-independent way to reconstruct phrases like ‘really there’; the notion of a match between the ontology of a theory and its “real” counterpart in nature now seems to me illusive in principle. [...] Though the temptation to describe that position as relativistic is understandable, the description seems to me wrong. Conversely, if the position be relativism, I cannot see that the relativist loses anything needed to account for the nature and development of the sciences.

While I enjoyed most of Kuhn’s analysis in the book, this part of his theory felt backwards to me. It seems like the rationalist project of building a map that reflects the territory would be defeated if this were the way scientific progress works. However, it’s also difficult to point out what exactly is wrong with Kuhn’s argument. Is Kuhn right, and if he is, can the rationalist project nevertheless be salvaged?

Kuhn is certainly not the only philosopher/historian of science who views science as a theory-laden endeavour. For example, David Deutsch writes in *The Beginning of Infinity*:

> We never know any data before interpreting it through theories. All observations are, as Popper put it, theory-laden, and hence fallible, as all our theories are. [...] Our sense organs themselves, and all the interpretations that we consciously and unconsciously attach to their outputs, are notoriously fallible – as witness the celestial-sphere theory, as well as every optical illusion and conjuring trick. So we perceive nothing as what it really is. It is all theoretical interpretation: conjecture.

So far, Deutsch’s view looks identical to what Kuhn is arguing for in his book. Somehow, however, Deutsch takes the opposite view on ontological progress: it's unbounded. He writes:

> In this book I argue that all progress, both theoretical and practical, has resulted from a single human activity: the quest for what I call good explanations. [...] Must progress come to an end – either in catastrophe or in some sort of completion – or is it unbounded? The answer is the latter.

## Good explanations

What are good explanations? Consider the following two explanations for the changing of seasons, borrowed from Deutsch:

> Long ago, Hades, god of the underworld, kidnapped and raped Persephone, goddess of spring. Then Persephone’s mother, Demeter, goddess of the earth and agriculture, negotiated a contract for her daughter’s release, which specified that Persephone would marry Hades and eat a magic seed that would compel her to visit him once a year thereafter. Whenever Persephone was away fulfilling this obligation, Demeter became sad and would command the world to become cold and bleak so that nothing could grow.

> It is that the Earth’s axis of rotation is tilted relative to the plane of its orbit around the sun. Hence for half of each year the northern hemisphere is tilted towards the sun while the southern hemisphere is tilted away, and for the other half it is the other way around. Whenever the sun’s rays are falling vertically in one hemisphere (thus providing more heat per unit area of the surface) they are falling obliquely in the other (thus providing less).

Based on the contrasts between those two explanations, we can formulate some properties of good explanations:
- **The best explanations are those that are most constrained by existing knowledge.**
- **Good explanations are hard to vary:** they don’t contain any superfluous details that have no explanatory power.
- **Good explanations are testable.** Note, however, that testability is not the sole defining feature of a good explanation: most myths are also easily testable, but this doesn’t make them useful.
- **Good explanations are often simple and elegant.** Deutsch again argues, though, that this is a byproduct of what a good explanation is rather than a defining property of a good explanation. For example, “Demeter did it” in the story above is a very simple explanation, but one that is easily variable and therefore useless.

From the argument given in the last point, Deutsch concludes that Occam’s Razor is a misconception and the search for the simplest explanations is misguided:

> This has given rise to a misconception known as ‘Occam’s razor’ [...], namely that one should always seek the ‘simplest explanation’. One statement of it is ‘Do not multiply assumptions beyond necessity.’ However, there are plenty of very simple explanations that are nevertheless easily variable (such as ‘Demeter did it’). And, while assumptions ‘beyond necessity’ make a theory bad by definition, there have been many mistaken ideas of what is ‘necessary’ in a theory.

As a quick aside on the main themes of this post, is Deutsch correct on this count? In the Sequences, Eliezer Yudkowsky [almost directly responded](https://www.lesswrong.com/posts/f4txACqDWithRi7hs/occam-s-razor) to Deutsch's argument, despite predating it. He writes:

> This lets us see clearly the problem with using “The lady down the street is a witch; she did it” to explain the pattern in the sequence 0101010101. If you’re sending a message to a friend, trying to describe the sequence you observed, you would have to say: “The lady down the street is a witch; she made the sequence come out 0101010101.” Your accusation of witchcraft wouldn’t let you shorten the rest of the message; you would still have to describe, in full detail, the data which her witchery caused. [...] The real sneakiness was concealed in the word “it” of “A witch did it.” A witch did what?

Replace the witch with Demeter, and you’ll have a direct counterargument to Deutsch’s point.

Deutsch is guilty of making a handwavy argument without thinking through the implications for bit strings, which are the measure of complexity one should actually use when thinking of simplicity. While Deutsch loses the argument on Occam’s Razor, I don’t see it as central to his arguments about good explanations. In my view, the property of being the most constrained by existing knowledge is just another way of stating that the explanation follows Occam’s Razor. Taking the classic example of predicting whether the Sun will rise tomorrow, a good explanation doesn’t use blind induction to formulate the simplest possible hypothesis that the sun will always keep rising. It applies all of the available knowledge to explain that the sun is a G-type main-sequence star fueled by hydrogen fusion. Applying Occam’s Razor, it doesn’t add any unnecessary, easily variable details, such as claiming that the hydrogen fuel will run out because Bigfoot willed so at the Beginning of Time. Then, based on this good explanation, one can make the accurate prediction that, conditional on there being observers on Earth for this long, the Sun will keep rising for roughly 5 billion more years, after which it becomes a red giant and swallows the Earth, alongside Mercury and Venus.

How are good explanations created? Deutsch claims that the source of all knowledge is *conjecture*. If a conjecture is found worthwhile of exploration, it is criticised and tested. Conflicts may be found when testing a conjecture, which implies a misconception in one’s thinking, but no amount of observation can correct this misconception until one makes a further conjecture that turns out to be a better idea. In contrast, if one has the right idea, they can explain the phenomenon even if there are large errors in the data.

This, again, seems pretty similar to Kuhn’s views: he too seems to believe that the source of a scientific theory is the *conjecture* that a set of tools and methods might prove fruitful for the study of some phenomena. The difference seems to be, though, that Deutsch believes in an objective process for choosing between theories/paradigms/conjectures. He claims that the role of experiment and observation is to choose between existing theories, not to be the source of new ones.

Kuhn goes further from the mainstream view and claims that there can be no scientifically or empirically neutral system of language or concepts. This implies that the proposed construction of alternate tests and theories must proceed from within one or another paradigm-based tradition. Furthermore, different paradigms have different methods and different sets of problems they’re interested in, and most often, neither of them agree with all observational data, so it is seldom possible to find a shared set of experiments that provides an objective ground for deciding which paradigm is better.

Rather, Kuhn writes, paradigm competition is resolved by convincing a crucial mass of scientists to come to prefer the new paradigm. One of the most effective ways the proponents of a new paradigm can do this is by solving the problems that led the old paradigm to a crisis. For example, Newton claimed that he had reconciled terrestrial and celestial mechanics, Lavoisier that he had solved the problems of gas-identity and of weight relations, and Einstein that he had made electrodynamics compatible with a revised science of motion. Quantitative superiority in solving problems that proponents of both paradigms care about is another compelling argument for adopting the new one. Finally, the prediction of phenomena that were previously completely unknown or unnoticed is a strong reason to convert. Paradigm shift doesn’t occur through some mystical aesthetic, but there is a strong component of faith held by the proponents of the new paradigm that it will solve important problems before there is conclusive empirical evidence that it will do so, which is cultivated through the three kinds of arguments described above.

## The Kuhn-Popper debate

None of the three arguments involve falsification, which is the core mechanism behind paradigm choice emphasized by Popper and Deutsch. How do they respond to the mechanism described by Kuhn?

Deutsch, in *The Beginning of Infinity*, mentions Kuhn only once, dismissing him as a relativist. Popper was a lot more charitable, noting in his essay "Normal Science and its Dangers" that Kuhn’s criticism of his views on science was the most interesting one he had come across. In his essay, Popper agrees with Kuhn that his previous work had, in Kuhn’s terminology, mainly focused on ‘extraordinary science’, not ‘normal science’. He also agrees with Kuhn that people approach everything in the light of a preconceived theory, and that science can be described as a revolutionary process. Finally, he finds Kuhn’s description of ‘normal science’ very important, though he argues that ‘normal science’ is undesirable.

What Popper vehemently disagrees with, however, is Kuhn’s claim that scientific practice presupposes the acceptance of a common framework, i.e. a paradigm. He views Kuhn’s argument that rational discussion between two scientists requires a common language and a common set of assumptions as a mistaken relativist thesis. Different languages are not untranslatable, he says, using the example of general relativity. Translating Newton’s mechanics to the language of general relativity, we find that Newton’s theory is an excellent approximation of Einstein’s, except for extremely fast-moving bodies. We can thus rationally see that Einstein’s theory is more accurate and general; it has a wider reach, to borrow a term from Deutsch. There is no need for the kinds of psychologically appealing demonstrations described at the end of the previous section to convince scientists that the new theory is better—the argument can be perfectly rational.

Kuhn would perhaps respond that we might come to a different conclusion if we tried to translate general relativity to the language of Newtonian mechanics, and thus, there is no single rational way of comparing the theories after all. This argument appears weak to me, for if general relativity is shown to better predict the elliptic orbit of Pluto in the language of itself, then how could it turn out to be the other way around in the language of Newtonian mechanics? More broadly, if Newtonian mechanics is shown to be a special case of general relativity, a narrower approximation of it, in the language of general relativity, then how could it possibly turn out to be the better description of the universe in the language of Newtonian mechanics?

As the second strong disagreement, Popper is a believer in absolute and objective truth. He agrees with Kuhn that we are prisoners of our past experiences and our language, but argues that we can break out of our frameworks, and find that some of them are better and roomier. In Popper’s view, scientific knowledge can be said to be subjectless, …

## How do Kuhn’s and Popper’s normative recommendations differ?

While Popper’s claim that theories can be rationally compared is compelling, it’s mainly a description of how theories should be compared, rather than of how scientists actually do it. As *The Structure of Scientific Revolutions* is primarily descriptive, maybe Kuhn agrees with Popper that rational comparison is both possible and desirable and simply argues that this is not the way paradigm shifts work in practice?

This seems not to be the case. Kuhn writes in the postscript of The Structure of Scientific Revolutions: “The preceding pages present a viewpoint or theory about the nature of science, and, like other philosophies of science, the theory has consequences for the way in which scientists should behave if their enterprise is to succeed. [...] [O]ne set of reasons for taking the theory seriously is that scientists, whose methods have been developed and selected for their success, do in fact behave as the theory says they should. My descriptive generalizations are evidence for the theory precisely because they can also be derived from it, whereas on other views of the nature of science they constitute anomalous behavior.”

Thus, Kuhn appears to recommend that a scientist trying to spread her new method of research focus on psychologically appealing demonstrations of the superiority of her theory, rather than on a rational comparison of the theories using a language common to both. Indeed, he tells the scientist that a rational comparison is impossible and that she therefore shouldn’t bother. Popper, of course, recommends the opposite.

Popper also disagrees that what Kuhn calls ‘normal science’ should be called normal. As described by Kuhn, a normal scientist doesn’t think much about the foundations of her field. She focuses on a few well-defined problems within a field that has an organized structure of assumptions and an agreed-upon set of worthwhile problems, and approaches those problems as isolated puzzles to be solved. Popper says that the normal scientist has been badly taught and is a victim of indoctrination. Popper doesn’t think that a scientist should be content with solving puzzles.

## What do other philosophers say?

What’s Deutsch’s position here? When we find a better explanation (i.e., one more constrained by other kinds of knowledge, or one stripped free of unnecessary details attached to the previous one), do the maps in our head get closer to reality, or do we become better puzzle-solvers?

Is finding better explanations the thing that happens during scientific revolutions, or are scientific revolutions more akin to ...

Therefore, ontological progress appears to be possible. However, the reason behind this is not that we cannot see reality in a theory-independent way. Where, then, does Kuhn’s argument go astray? ...

<!-- Kuhn vs Popper on falsification -->

## Is Kuhn a relativist?

Deutsch attacks relativists as follows:

> During the twentieth century, most philosophers, and many scientists, took the view that science is incapable of discovering anything about reality. Starting from empiricism, they drew the inevitable conclusion [...] that science cannot validly do more than predict the outcomes of observations, and that it should never purport to describe the reality that brings those outcomes about. This is known as instrumentalism. It denies that what I have been calling ‘explanation’ can exist at all. [...] Once one has denied this, the logical implication is that all claims about reality are equivalent to myths, none of them being better than the others in any objective sense. That is relativism, the doctrine that statements in a given field cannot be objectively true or false: at most they can be judged so relative to some cultural or other arbitrary standard.
>
> Instrumentalism, even aside from the philosophical enormity of reducing science to a collection of statements about human experiences, does not make sense in its own terms. For there is no such thing as a purely predictive, explanationless theory. One cannot make even the simplest prediction without invoking quite a sophisticated explanatory framework.

Kuhn certainly doesn’t argue that purely predictive, explanationless theories exist. On the contrary, he fully agrees with Deutsch, since what he calls a paradigm is a very similar concept to what Deutsch has in mind here when talking about a sophisticated explanatory framework.

Instrumentalism, however, is not the only kind of relativist theory out there. ...

<!-- Yet to be discussed:
two dogmas of empiricism
Yud contra Deutsch on inductivism

https://philosophy.hku.hk/courses/dm/phil2130/AConfutationOfConvergentRealism2_Laudan.pdf

See the 4 theories of scientific knowledge in Russell’s History of Western Phil in the Hume chapter
-->
