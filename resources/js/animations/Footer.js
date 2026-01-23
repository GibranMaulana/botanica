import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { HoverAnimation } from "./global/Hover";

export class footer {
   constructor() {
      this.ctx = null;
      this.init();
   }

   init() {
      
      const section = document.getElementById("footer-section");
      const links =  section.querySelectorAll(".links");
      const headingsElements = section.querySelectorAll('.headings');

      this.ctx = gsap.context(() => {

         const splitLinks = SplitText.create(links, { type: "words, chars"});
         const splitHeadings = SplitText.create(headingsElements, { type: "words, chars"});

         if(!section || !links || !headingsElements) {
            console.log('masih belum');
         }

         const timeline = gsap.timeline();

         timeline
            .from(splitLinks.chars, {
               rotateY: -90,
               // opacity: 0,
               // y: 20,
               x: -10,
               stagger: 0.02,
               duration: 0.4,
               onComplete: () => {
                  links.forEach(e => {
                     new HoverAnimation(e);
                  })
               }
            })
            .from(splitHeadings.chars, {
               rotateY: -90,
               // opacity: 0,
               // y:20,
               x: -10,
               stagger: 0.02,
               duration: 0.4,
               onComplete: () => {
                  console.log("footer tween activated");
                  
               }
            }, "<")
         
         ScrollTrigger.create({
            trigger: section,
            start: 'center bottom',
            once: true,
            animation: timeline
         })

         
      })
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
}