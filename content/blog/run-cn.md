+++
title = "Running the length of Caulfield North"
date = 2023-02-17
+++

[**to the project page**](@/projects/run-cn/index.md)

Firstly, this project was inspired by [**this**](https://youtu.be/1c8i5SABqwU) video by [**Tom Murphy**](http://tom7.org/).

My goal with this project is to run the length of every street in Caulfield North, documenting and recording as I go. There are two parts to this. The software side is that I want to automate tracking and visualising my runs, just as a small project to do, learning how to integrate things on the web, use servers and APIs, etc..\

The second part is the fitness aspect, because I used to be a lot fitter than I am now, and I want to get back into shape. This unique idea (that I stole) is a good way for me to keep it interesting for myself, which is a very good way that I can keep myself motivated. The whole visualisation part of it is mostly a learning thing as well as another method to keep myself motivated to keep running, as if I can see that there are parts missing, I will want to fill them up.\

While I have no plans for after I complete Caufield North, I do think that increasing my range is definitely in the sights, as by then I should be fitter and more capable of going on longer runs. Also hopefully it is colder by then.

Right now what I have in terms of the website is just a screen shot of another program, [**gpx.studio**](https://gpx.studio/) that I used as a test:

{{ image(loc="/projects/run-cn/comp_20_02_2023.png", desc="My coverage so far", size=50) }}

Which is kind of what I want my finished map to look like, except interactive. I could just embed the gpx.studio map, but I feel like thats cheating, and I want to do it myself from scratch (or at least build off mapbox like gpx.studio does). Thats why I have the mapbox map on the project page as a placeholder as well.

I think I might try using MongoDB, purely because I have some free credit for it. I will parse my GPX files into collections, so each line will be a data point in the gpx file, and each collection will be a file.

---

Anyway, I will keep working on the project, improving the visualisation and automation of data transfer, as well as running more.