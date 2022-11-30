+++
title = "Reviving my dead website!"
description = "After two years, my website is finally getting an update?"
date = "2022-11-30"
tags = ["hackathon"]
categories = ["programming", "web-development"]
instagram_link = "https://www.instagram.com/p/Cllbq8OPD6I/"
[[images]]
  src = "img/2022/11/blog1.png"
  alt = "blog1"
  stretch = "stretchH"
+++

### Story

Once upon a time, there was a boy who made a website. At that time, he thought that websites were cool, so making a website would make him very cool too. Of course, he was wrong. Alas, the poor boy did not know how to market the website, he was too scared, too shy to tell the world of its existence other than a small link next to his github profile. And without any traffic, the boy grew unmotivated, and eventually abandoned it.

Two years later, the boy has changed. Now he has many things he wants to tell the world about, and he has the courage to speak out and make mistakes. And with that, the boy started working on his website once more...

### Updating the website

The decisions made in building this website has already been documented in an earlier post [here!](https://gerhean.netlify.app/blog/2020-12-08-making-of-website/). Feel free to read it for the technical details.

To be honest, I had always thought that the home page was quite buggy. And so, I completely remade it to this lovely scene.

![blog1](/img/2022/11/blog1.png)

Many would recognise this scene as the one I typically use for my profile picture. Indeed, it was my first heavily gimped work, so I'm quite proud of it. 

The biggest challenge I faced was getting the anime face to stick at the bottom left corner. I only made the picture from shoulders up, and it would be quite weird for her to be floating around. Firstly, I used the flex-end property of CSS flexboxes, however that did not solve the problem of the container not reaching the bottom of the page. Next, I tried absolute positions, but that made the content unscrollable on small screens. So it was clear that setting height to page height is the key here. I tried to set the height of the homepage content to 100vh, but that made the page longer than the viewport, resulting in an ugly scroll bar. 

Why? Turns out the header takes up space too! Aha, what if I set the height to 100vh minus the height of the header. The header is not made by me, rather it is taken from the Hugo Future Imperfect Slim theme, and there was A LOT of CSS in that theme. Thankfully, I can just check the height via developer tools. But what if the theme is updated in the future? Well...

[hugo_theme_archived](/img/2022/11/hugo_theme_archived.png)

It doesn't seem to be a problem anymore.

Other than the home page, I also updated all my other pages to have a cuter background. Of course, I also updated some outdated information about myself.

![blog2](/img/2022/11/blog2.png)

### Concluding thoughts

Honestly I'm just glad that my homepage is much nicer looking now. Perhaps I'll even update it in the future when I have more ideas? Hopefully I can keep the blog alive this time. I have some content planned, so don't miss out! Anyway, it's almost time for me to eat my dinner, so ta ta for now!
