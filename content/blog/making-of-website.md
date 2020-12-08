+++
title = "Making of Website"
description = "My First Post!"
date = "2020-12-08"
tags = ["hugo", "html"]
categories = ["programming"]
[[images]]
  src = "img/2020/12/first-website-ss.png"
  alt = "My Website Screenshot"
  stretch = "stretchH"
+++

At long last, my new website is finally up and running.

## Motivation

My first personal site was made in 2018, just before I entered University. Made with Reactjs, it was hard to maintain, and was hence simply ignored for the next few years. Deep inside, I knew that an unmaintained site is more of a liability than an asset, but I couldn't bring myself to make a new site due to my high workload during University semesters.

It all changed in the December of 2020, when I failed to secure an internship. Instead of wallowing in sorrow, I decided that I had to take steps towards improving myself. And this blog is the first product of my resolve.


### Giving Back

I have always admired content creators. Whenever I look at blogs and videos online, I always wondered how much time and effort was spent perfecting them. It felt unfair that I was always consuming and never giving. This blog is also a realisation of those feelings, a first step towards contributing back to the community.



## Planning

My orignal plan was to update my original site made in [ReactJS](https://reactjs.org/), but it wasn't long before I realised how hard it was to update the content. While ReactJS is extremely flexible in what it can provide, but this flexibility also comes with the tradeoff for being very complex. For a simple blog, I certainly didn't need all the features which came with React.

The next thing I did was to look for a convenient framework to build my website with. Among those which I considered were [Wordpress](https://wordpress.com/) and [Gatsby](https://www.gatsbyjs.com/). While in deep thought, I stumbled across my [friend's site](https://blog.yeejian.dev/) while browsing Github. It was beautiful, and it was inevitable that I tried Hugo, the framework behind that asthetically pleasing site.


### Why Hugo?

* Just 2 semesters ago, I was tasked with writing up documentation for my software engineering module using [Markdown](https://en.wikipedia.org/wiki/Markdown), and it was quite the pleasant experience. So imagine my surprise when I found out that updating content in Hugo only requires one to submit a Markdown file after the website was set up. It is a step down in complexity compared to writing raw html, but still offers ample flexiblity.

* Another aspect which led me to using Hugo was that it offered many free to use themes which were blindingly simple to implement. 


## Challenges

Being a novice at html and css, I struggled the most with integrating the two themes which I had used. If you had looked at the [Hugo Future Imperfect Slim](https://github.com/pacollins/hugo-future-imperfect-slim) demo, you would realise that the home page looks exactly like the blog page. I found this unappealing and hence sought to replace it with a better landing page. However I still wanted the header from the original theme to maintain a more consistent appearance. This made the integration very troublesome as the css from the old theme would mess up the display of the new homepage, and in the end I had to inspect each element individually. It was definitely a learning experience.

Thankfully everything else went smoothly as there were carefully crafted tutorials for each of the other components of this website. 
