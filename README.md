# Project Botanica

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Website-000000?style=flat-square&logo=vercel&logoColor=white)](https://botanica.gibranmaulana.me)

A high-end, browser-based application conceptualized for a fictional luxury skincare brand.

### Tech Stack

![PHP](https://img.shields.io/badge/PHP_8.4-777BB4?style=flat-square&logo=php&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white)
![Barba.js](https://img.shields.io/badge/Barba.js-2d3e50?style=flat-square&logo=javascript&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=ubuntu&logoColor=white)

---

## The Vision

After exploring GSAP in a previous project, I wanted to push my frontend skills further through a conceptual experiment. I asked myself: *How would I architect a high-end brand profile and e-commerce platform if a luxury client requested one today?* Project Botanica is my answer to that question—a playground for testing complex animations, 3D elements, and seamless page transitions without sacrificing backend stability.

## Current Challenges & Roadmap

The application is currently live, but FAR FROM OVER. I am actively working on resolving a few cross-platform compatibility and performance edge cases:

* **Mobile 3D Performance:** Optimizing Three.js assets for lower-end devices and resolving a visual jump during the entrance animation when navigating to the collection page.
* **Transition Edge Cases:** Smoothing out Barba.js and GSAP routing on mobile viewports to prevent layout breaks and overlapping animations during rapid navigation.
* **Asset Delivery (Safari):** Debugging an issue specific to WebKit/Safari where certain optimized assets fail to render correctly on the initial load.
* **Responsive Hell:** Trying to make complex GSAP timelines and Three.js canvases scale perfectly across every single viewport size is an absolute nightmare right now.

*These optimizations are prioritized for the next series of updates.*
