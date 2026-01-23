import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText';

export class HoverAnimation {
   constructor(element) {
      this.el = element;
      this.ctx = null;
      this.onEnter = null;
      this.onLeave = null;
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {
         const splitText = SplitText.create(this.el, { type: "words, chars"});

         const hover = gsap.to(splitText.chars , {
                           paused: true,
                           duration: 0.4,
                           rotateY: -180,
                           perspective: 1000,
                           transformOrigin: "center center",
                           stagger: { amount: 0.6}
                        })

         this.onEnter = () => hover.play();
         this.onLeave = () => hover.reverse();

         this.el.addEventListener('mouseenter', this.onEnter);
         this.el.addEventListener('mouseleave', this.onLeave);

      }, this.el)
   }

   kill() {
      if(this.ctx) this.ctx.revert();
      
      this.el.removeEventListener('mouseenter', this.onEnter);
      this.el.removeEventListener('mouseleave', this.onLeave);
   }
}