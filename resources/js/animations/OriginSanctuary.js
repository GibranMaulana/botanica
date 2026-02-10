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
            scale: 1,
            y:400,
            autoAlpha: 1,
         }, {
            scale: 0.9,
            autoAlpha: 0.3,
            y:-400,
            duration: 12
         }, 0)

         .fromTo(title, {
            scale: 1.1,
            autoAlpha: 0,
            y:100
         }, {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            scale: 0.9,
            duration: 4
         }, 0)
         
         .fromTo(dialouge1, {
            autoAlpha: 0,
            y: 50,

         }, {
            autoAlpha: 1,
            y: 0,
            duration: 4,
         }, 4)

         .fromTo(dialouge2, {
            autoAlpha: 0,
            y: 50,
         }, {
            autoAlpha: 1,
            y: 0,
            duration: 4,
         }, 8)

         ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            animation: tl
         })
      }, this.scope)
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
}