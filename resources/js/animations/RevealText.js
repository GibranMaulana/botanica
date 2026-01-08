import gsap from 'gsap';

export class RevealText {
   constructor(el) {
      this.el = el;
      this.ctx = null;
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {
         gsap.from(this.el, {
            scrollTrigger: {
               trigger: this.el,
               start: "top 80%", 
               markers: true,
               scrub: true,
               once: false
            },
            x:300,
         })
      }, this.element)
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
} 