import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export class LoaderText {
   constructor(el) {
      this.element = el,
      this.ctx = null;
      this.splitter = null;
      this.init()
   }

   init() {
      this.splitter = SplitText.create(this.element, { type: "words, chars"});
      let entireSection = document.getElementById('sanctuary-section');

      this.ctx = gsap.context(() => {
         
         gsap.from(this.splitter.chars, {
            scrollTrigger: {
               trigger: this.element,
               once: true
            },
            duration: 1,
            rotateY: -90,        
            opacity: 0,          
            stagger: 0.05
         });

         gsap.to(this.element, {
            scrollTrigger: {
               scrub: true,
               trigger: this.element,
               start: "top 40%",
               end: "top 20%",
            },
            y: "100%",
            opacity: 0,
            ease: "power1.in"
         });

         gsap.to(entireSection, {
            scrollTrigger: {
               scrub: true,
               trigger: entireSection,
               start: "center top",
               end: "bottom top"
            },
            opacity: 0
         })
         
      }, this.element)
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
}

export class CurveLine {
   constructor(el, elEnd) {
      this.element = el,
      this.elementEnd = elEnd,
      this.ctx = null,
      this.init()
   }

   init() {
      this.ctx = gsap.context(() => {
   
      gsap.to(this.element, {
         duration: 1.5, 
         morphSVG: { shape: this.elementEnd},
         ease: 'power4.out'
      })

      }, this.element)
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
}