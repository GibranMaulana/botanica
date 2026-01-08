import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

export class RevealText {
   constructor(el) {
      this.el = el;
      this.ctx = null;
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {

         let word = SplitText.create(this.el, {type: "words, chars"});
         // gsap.set(this.el, { perspective: 400 });
         gsap.from(word.chars, {
            scrollTrigger: {
               trigger: this.el,
               start: "top 70%", 
               end: "top 30%",
               scrub: true,
               once: false
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