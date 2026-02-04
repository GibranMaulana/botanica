import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class OriginSanctuary  {
   constructor(scope) {
      this.ctx = null;
      this.scope = scope;
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {
         
         const section = '#origin-sanctuary'
         const wrapper = '#origin-wrapper'
         const title = '#title-origin-sanctuary';
         const image = '.image-asset'
         const dialouge1 = '#dialouge-one';
         const dialouge2 = '#dialouge-two';

         let tl = gsap.timeline({
            paused: true, 
         });

         tl
         .fromTo(image, {
            filter: "blur(0px)",
            y:400,
            opacity: 1,
         }, {
            filter: "blur(20px)",
            opacity: 0.5,
            y:-400,
            duration: 12
         }, 0)
         .from(title, {
            filter: "blur(10px)",
            opacity: 0,
            y:100,
            duration: 4
         }, 0)
         .from(dialouge1, {
            filter: "blur(20px)",
            opacity: 0,
            duration: 4,
            y: -100,
            ease: 'power2.out'
         }, 4)
         .from(dialouge2, {
            filter: "blur(20px)",
            opacity: 0,
            duration: 4,
            y: 100,
            ease: 'power2.out'
         }, 8)

         ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            animation: tl
         })
      }, this.scope)
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
}