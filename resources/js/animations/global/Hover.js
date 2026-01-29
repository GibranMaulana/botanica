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

export class HoverAnimationUtil {
   constructor(element, target, config) {
      this.el = element;
      this.target = target;
      this.ctx = null;
      this.config = config;
      this.onEnter = null;
      this.onLeave = null;
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {

         const hover = gsap.to(this.el, { ...this.config, paused: true})

         this.onEnter = () => hover.play();
         this.onLeave = () => hover.reverse();

         this.target.addEventListener('mouseenter', this.onEnter);
         this.target.addEventListener('mouseleave', this.onLeave);

      }, this.el)
   }

   kill() {
      if(this.ctx) this.ctx.revert();
      
      this.target.removeEventListener('mouseenter', this.onEnter);
      this.target.removeEventListener('mouseleave', this.onLeave);
   }
}