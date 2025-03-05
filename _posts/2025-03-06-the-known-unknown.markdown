---
layout: post
title:  "the known unknown."
date:   2025-03-06 01:16 +0400
categories:
mathjax: true
---

_03rd march 2025, thursday_

# the known unknown.
---

so, i promised discussions about more mathematical concepts and i found one that really intrigued me because of how exapnsive its field really is. chaos theory deals with nonlinear things that are effectively impossible to predict or control, like turbulence, weather, the stock market, our brain states, and so on. there are certain models that can represent a chaotic behaviour within a deterministic system.

one example of such a model is the lorenz attractor. first studied by mathematician and meteorologist edward lorenz, the lorenz attractor is essential a set of three differential equations that the rate of change of the x, y and z coordinates of a particular point.

\\[
\frac{dx}{dt} = \sigma (y - x), \quad
\frac{dy}{dt} = x (\rho - z) - y, \quad
\frac{dz}{dt} = xy - \beta z
\\]

the above equations when graphed forms a beautiful butterfly shaped three dimensional graph that is changed if there is a slight change in the parameters that are \\(\sigma\\), \\(\rho\\) and \\(\beta\\). these parameters have been set to the vales below.

\\[\sigma = 10\\]
\\[\rho = 28\\]
\\[\beta = \frac{8}{3}\\]

i coded this as a loop that collects all the values and create an array of vectors which can then be plot on a graph. i did it using <a href = "https://processing.org/" target = _blank>processing</a>, just because its easier to graph on it. also tried java for the first time. well, i tried to add the animation that i got from coding the lorenz attractor, but github was being annoying.

github pages is picky about how it handles files, and despite following all the tutorials, my video didn’t play, and my image was... not there. after a bit of head-scratching and googling, i realized i was making rookie mistakes with file paths and github’s quirky hosting system. it turns out, videos and images don’t always play nice on github pages unless you tweak things just right.

so, <a href = "https://www.youtube.com/watch?v=ejewiHuQQN8" target = _blank>here</a> is a youtube video that i published so you can see how the graph looks. and here is the github repository with the code which rendered the graph for the lorenz attractor.

- ask.
