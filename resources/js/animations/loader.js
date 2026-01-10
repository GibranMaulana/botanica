import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export class LoaderText {
   constructor(el) {
      this.element = el;
      this.ctx = null;
      this.splitter = null;
      this.trigger = {
         scrub: this.element.dataset.triggerScrub || false,
         target: document.querySelector(this.element.dataset.triggerTarget) || this.element,  
         start: this.element.dataset.triggerStart || 'top bottom',
         end: this.element.dataset.triggerEnd || 'bottom top',
         once: this.element.dataset.triggerOnce || false,
      }
      this.hover = {
         animation: null,
         enter: null,
         leave: null,
      }
      this.introComplete = false;
      this.init();
   }

   init() {
      this.splitter = SplitText.create(this.element, { type: "words, chars"});
      let entireSection = document.getElementById('hero-sanctuary');
      const disableHover = this.element.dataset.noHover !== undefined;

      this.ctx = gsap.context(() => {
         
         gsap.from(this.splitter.chars, {
            scrollTrigger: {
               trigger: this.element,
               once: true
            },
            duration: 1,
            rotateY: -90,        
            opacity: 0,          
            stagger: 0.05,

            onComplete: () => {
               this.introComplete = true;
            }
         });

         gsap.to(this.element, {
            scrollTrigger: {
               scrub: parseInt(this.trigger.scrub, 10),
               trigger: this.trigger.target,
               start: this.trigger.start,
               end: this.trigger.end,
               once: this.trigger.once
            },
            y: "100%",
            opacity: 0,
            ease: "power1.in"
         });

         gsap.to(entireSection, {
            scrollTrigger: {
               scrub: 1,
               trigger: entireSection,
               start: "top top",
               end: "bottom center",
            },

            ease: 'power1.in',
            y: "-30%"
         })

         if(!disableHover) [
            this.hover.animation = gsap.to(this.splitter.chars, {
               duration: 0.5,
               rotateY: -180,
               paused: true,
            })
         ]
         
      }, this.element)

      if(!disableHover) {
         this.hover.enter = () => {
            if(this.introComplete && this.hover.animation) {
               this.hover.animation.play();
            }
         }
         
         this.hover.leave = () => {
            if(this.introComplete && this.hover.animation) {
               this.hover.animation.reverse();
            }
         }
   
         this.element.addEventListener('mouseenter', this.hover.enter);
         this.element.addEventListener('mouseleave', this.hover.leave);
      }
   }

   kill() {
      if(this.hover.enter) this.element.removeEventListener('mouseenter', this.hover.enter);
      if(this.hover.leave) this.element.removeEventListener('mouseleave', this.hover.leave);
      if(this.ctx) this.ctx.revert();
   }

   
}

export class CurveLine {
   constructor(el, elEnd) {
      this.element = el,
      this.elementEnd = elEnd,
      this.ctx = null,
      this.trigger = {
         scrub: this.element.dataset.triggerScrub || false,
         target: document.querySelector(this.element.dataset.triggerTarget) || this.element,  
         start: this.element.dataset.triggerStart || 'top bottom',
         end: this.element.dataset.triggerEnd || 'bottom top',
         once: this.element.dataset.triggerOnce || false,      
      }
      this.init()
   }

   init() {
      this.ctx = gsap.context(() => {

         const isGrowOnScroll = this.element.dataset.growOnScroll !== undefined;
         if(isGrowOnScroll) {

            gsap.to(this.element, {
               scrollTrigger: {
                  scrub: parseInt(this.trigger.scrub, 10),
                  trigger: this.trigger.target,
                  start: this.trigger.start,
                  end: this.trigger.end
               },
               morphSVG: { shape: this.elementEnd},
            })

            console.log("defined kok")
            
         } else {

            gsap.to(this.element, {
               duration: 1.5, 
               morphSVG: { shape: this.elementEnd},
               ease: 'power4.inOut'
            })

            console.log("ngga kedefined")
         }

      }, this.element)
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
}