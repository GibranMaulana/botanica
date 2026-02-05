import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { HoverAnimation } from "./global/Hover";

export class ManifestoSanctuary {
   constructor(scope) {
      this.ctx = null;
      this.scope = scope;
      this.hoverInstances = [];
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {
         const section = this.scope.querySelector('#manifesto-sanctuary');

         const titleContainer = section.querySelector('#title-container')

         const title = section.querySelectorAll('.reveal-title');
         const splitTitle = SplitText.create(title, { type: "words, chars"});

         const sub = section.querySelectorAll('.reveal-sub');

         const textblur = section.querySelectorAll('.reveal-blur');
         const button = section.querySelector('#manifesto-button');

         gsap.from(splitTitle.chars, {
            scrollTrigger: {
               trigger: titleContainer, 
               start: "top bottom",        
               end: "top center",       
               scrub: 1.5,
            },
            rotateY: -90,        
            opacity: 0,          
            stagger: 0.1,
            opacity: 0,
            duration: 1,
         })
         gsap.from(titleContainer, {
            scrollTrigger: {
               trigger: titleContainer, 
               start: "top bottom",        
               end: "top center",       
               scrub: 1.5,
            },
            y: 100,
            opacity: 0,
         }, "<")
         gsap.from(sub, {
            scrollTrigger: {
               trigger: sub, 
               start: "top bottom",        
               end: "top 75%",       
               scrub: 1.5,
            },
            y:100,        
            opacity: 0,          
            stagger: 0.1,
            opacity: 0
         })
         gsap.from(textblur, {
            scrollTrigger: {
               trigger: textblur, 
               start: "top bottom",        
               end: "top 85%",       
               scrub: 1.5,
            },
            opacity: 0,
            y: 100,
            filter: "blur(20px)"
         })

         this.hoverInstances.push(new HoverAnimation(button))
         // ScrollTrigger.create({
         //    markers: true,
         //    trigger: section,
         //    start: "top 80%",
         //    end: "top 20%",
         //    scrub: 1.5,
         //    animation: tl,
         // })
      }, this.scope)
   }

   kill() {
      if(this.hoverInstances.length) this.hoverInstances.forEach(e => { e.kill() });
      this.hoverInstances = [];
      if(this.ctx) this.ctx.revert()
   }
}