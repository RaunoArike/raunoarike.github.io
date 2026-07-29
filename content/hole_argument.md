---
title: "Explaining the Hole Argument"
draft: true
date: 2026-01-01
notes: ""
category: misc
tags:
  - essay
  - physics
---

In the spirit of [my own advice]() to write blog posts about the confusions you've resolved with the help of LLMs, I'm going to present an overview of the hole argument, why it tripped up Einstein and Hilbert, and what the correct way to think about the nature of spacetime is.

## Preliminaries

Have a look at the most famous equation of general relativity, the Einstein Field Equation:

$$g_{\mu \nu} = \frac{8 \pi G}{c^4} T_{\mu \nu}$$

This equation acts on the spacetime manifold $\mathcal{M}$. On the left-hand side, we have the metric tensor $g_{\mu \nu}$, which is often described as a mathematical object that encodes the geometry of spacetime—i.e., that tells you how to measure infinitesimal distances from point $p$ to nearby points, or the spacetime separation between two points on the spacetime manifold. On the right-hand side, we have the energy-momentum tensor $T_{\mu \nu}$, which ...

Note the suggestive language in the definition above: by saying that $g_{\mu \nu}$ describes what happens at a point $p$, we're effectively designating the concept of a point as an ontological primitive. Keep this design choice in mind—it's going to be important later on.

## The Hole Argument

When Einstein first started searching for a theory of general relativity, he wanted it to be **generally covariant**, which informally means that the laws of the theory can be written in a way that's independent of the choice of coordinates. In contrast to Newtonian physics and special relativity which have preferred coordinate systems—inertial frames are preferred over non-inertial ones—, general relativity was supposed to be completely agnostic to the choice of coordinates.[^1]

Where did Einstein's intuition that this should be the case come from? ...

In late 1913, Einstein began to doubt his intuition. His doubts were caused by the hole argument, which goes as follows. Consider a toy universe that contains three galaxies moving away from each other. There's a point $E$ that the galaxies may either pass through or avoid. On the left-hand side of image below, the middle galaxy passes through $E$, while on the right-hand side, no galaxy passes through $E$. If your theory of the universe is generally covariant, then there's no way for you to distinguish between those two situations: the model on the left can be transformed into the one on the right while the field equation remains the same. This is because generally covariant theories are **invariant under diffeomorphic transformations**: ... 

[^1]: An inertial frame is ..., while a non-inertial frame is ...