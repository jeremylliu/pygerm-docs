---
slug: postmortem blog post
title: EECS 498 Postmortem
authors:
  name: Jeremy Liu
  title: PyGerm Designer
  url: https://github.com/jeremylliu
  image_url: https://github.com/jeremylliu.png
tags: [reflection, postmortem]
---

## Introduction

Welcome to my first blog here! Through this blog, I just hope to reflect a little bit on the journey I have taken to build this game engine and maybe you can learn something new too!  

## History

So a little about my past with game creation, it's been a really long time since I created or designed a game. I remember way back when I was a kid when I had my only experience working with game development where my parents enrolled me in a coding summer camp program that taught me how to use MIT Scratch. Even though I recall being completely confused by how so many things worked, I remember the rush I experienced when I created my first ever story about a hypnotizing clam. I loved it. However, since I never had a computer at home at that time, my game development dreams faded with it. 

However, as my final semester here at Michigan rolled around, I just happened to stumble upon this class in the special topics section of the course guide and man, did it bring back memories. I was so excited to give game development another shot, and I was not disappointed.

I remember back to when we created a basic "schmup" at the start of the semester in three different game engines. Boy did it bring back memories. I remember how satisfying it was to see each feature come together yet, also it also seemed to make me oddly frustrated with each and every engine I tried. I didn't like how GameMaker was so committed to drag and drop, how Love2D required an external executable at all time, and even how Unity was unbelievably frustrating with its UI and countless random interactions that I had to deal with. I just wanted to programmatically create a game with all the tools available to me, but without any dictations on how I should.

I was really excited to jump into engine development

## The Development Journey

As I began to transition into engine development instead of game development, I was really excited. It was amazing to see the slow but steady transformation of a simple ascii game be completely transformed into a full-fledged 2D Game engine. Sure, at some points it was extremely frustrating to see my code not even link, but the satisfaction of seeing part after part come together was just so rewarding. I remember how amazed I was that my engine, thousands of lines long, was empowering me to create a game in just a short few lines of code. It was truly amazing to see what else code could do, outside simply creating websites that I was so used throughout my software engineering career.

Throughout the months of creating my engine (and the hundreds of commits that went along with it), I remember homework5 being the absolute toughest. It wasn't due to the content that was required or the difficulty or time the code required, it was simply due to the fact that I had to do something completely new. To link static and dynamic libraries in C++. I remember being so frustrated to the point that I went on a run at 2am in the morning, saving myself from chucking my laptop across my room. That no matter what I looked up on Google, Stack Overflow, or even ChatGPT, nothing worked. It took me probably 20-30 hours of aimlessly wandering the UIs of XCode to finally get it to work and man, was it satisfying to see the results. Although, even though this was my most frustrating assignment, it was probably my favorite homework as well. It made me feel like man, I have learned so much in such a short amount of time. The blood, sweat, and tears, that I suffered through really made me feel a lot more confident and seeing the results of SDL2 begin to render images across the screen was *oh, so worth it*. 

Additionally, I developed this project at a pretty consistent rate, with maybe a few day breaks here or there. I remember sometimes after an extremely frustrating assignment, I would take a day or two to simply relax and not think about the project. However, after a day or two, I would really miss the project that I was building up and I would always come running back putting in an hour here, another hour there. And, yes, I did have to pull a few all-nighters as well to get a couple of projects done but it was all worth it in the end.

To accelerate my development journey as well, I also blocked out hours at the start of each project, simply thinking through *how* I wanted to format my code. I thought about how to make my code as modular as possible (adhering to DRY), how to make one function do one thing, and even designing in a couple of features I knew I would need to expand the custom game engine feature that I had in mind. Similarly, I also used a small amount of AI assistants throughout my coding process. In particular, I am a huge fan of GitHub Co-pilot that really helped save me a lot of time, copying and pasting code that followed a similar format. Additionally, ChatGPT was extremely useful for making those nasty linker and makefile build errors actually readable for me to attempt to debug. However, outside of those use cases, I usually fell back on simple google searches and man, you should see how many links I've clicked on to finally find some of the solutions I needed (hint: my entire page is completely purple).

## Building the Custom Feature

Since the semester started, I knew that I wanted to build a Python port for my game engine. It just holds such a special place in my heart with how quick it is to pick up and use, right out of the box. Additionally, my girlfriend also mentioned how she thought what I was building was really, really cool and also said she would try to create a game in Python if I ported it over so... You know what I had to do.

To make this vision a reality, I decided to completely gut `Lua` and `LuaBridge` and completely replace it with `PyBind11`. Additionally, to make my engine easily installable on other devices, I also had to learn CMake to build my engine, alongside many Python packages like wheel, twine, and PyPi to build and distribute my engine as well.

Over the summer and into the future ahead, I really want to finish my engine port. I was able to port over the entirety of homework7 but I have not had the time to port homework8. Additionally, I want to get the distribution system a lot more stable releases (i.e. automating and building releases to PyPi) and also property distribute wheels instead of a source build which requires a user to install SDL2 and some other dependencies. Lastly, I also really want to build more available components like a basic sprite renderer, input controller, and even a multiplayer component and build that within my engine as well.  I also want to try to get this engine into the open source community and see what others think and add support for decorators to make my game engine more pythonic as well.

## Conclusion

Throughout the entire development process of this game engine, there were clearly a lot of up and downs. However, with every hurdle which caused me to fall face-first into the ground (linking, bugs, etc.), the lessons I learned overcoming these problems will continue to make me a better programmer in the future. I am extremely proud of the work I have accomplished in this game engine, and I am excited to discuss the work I have with future recruiters. I'd love to emphasize my passion for building something completely new to solve a problem I had continuously faced and the skills I have learned along the way. Additionally, throughout building this game engine, I believe my confidence and skill in C++ has continued to grow. While I already felt extremely confident with C++ before since I had already taken EECS 482, this course added on top of that experience, teaching me how true C++ development works across a larger scale project.

Unfortunately, since my time in college is now coming to a close, it makes me extremely sad that I am unable to take any other game development course here (and that I have never taken one prior to this one as well). However, if I was a staff in this course next semester, I would really want to be taught CMake at an earlier stage. I believe that its benefits and commonality in industry would be invaluable as well and would be an interesting addition to possibly homework6 or homework7 (after learning it on a per IDE level). I would also love a larger showcase for showing off some of the engine features to my fellow peers outside the discord channel. Creating documentation would be a useful skill as well (as it really forces you to think and understand the API you are building).

I really loved the class and, in all honestly, has taught me some of the most practical skills out of any classes here. I am really glad I decided to take one more class before I graduated, and thank you for providing me such an amazing experience.

With that, I'm heading off to the next chapter of my life. Feel free to reach out if you have any questions or want to chat about my engine or any of my feedback. I would love to help out in refining this course more for future students as well. Maybe, just maybe, I can make my engine grow into something truly amazing in the future as well.
