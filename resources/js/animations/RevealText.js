import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

export class RevealText {
   constructor(el) {
      this.el = el;
      this.ctx = null;
      this.trigger = {
         scrub: this.el.dataset.triggerScrub || false,
         target: document.querySelector(this.el.dataset.triggerTarget) || this.el,  
         start: this.el.dataset.triggerStart || 'top bottom',
         end: this.el.dataset.triggerEnd || 'bottom top',
         once: this.el.dataset.triggerOnce || false, 
      }
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {

         let word = SplitText.create(this.el, {type: "words, chars"});
         // gsap.set(this.el, { perspective: 400 });
         gsap.from(word.chars, {
            scrollTrigger: {
               trigger: this.trigger.target,
               start: this.trigger.start,
               end: this.trigger.end,
               scrub: parseInt(this.trigger.scrub, 10),
               once: this.trigger.once
            },

            rotateY: -90,        
            opacity: 0,          
            stagger: 0.1
         })
      }, this.el)
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
} 