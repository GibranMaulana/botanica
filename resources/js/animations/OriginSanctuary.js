import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class OriginSanctuary  {
   constructor(scope) {
      this.ctx = null;
      this.scope = scope;
      console.log(scope);
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {

         // const section = document.getElementById('origin-sanctuary');
         // const wrapper = document.getElementById('origin-wrapper');
         // const bg = document.getElementById('origin-bg'); 
         // const title = document.getElementById('title-origin-sanctuary');
         // const image = section.querySelectorAll('.image-asset');
         // const dialouge1 = document.getElementById('dialouge-one');
         // const dialouge2 = document.getElementById('dialouge-two');
         const section = '#origin-sanctuary'
         const wrapper = '#origin-wrapper'
         const bg = '#origin-bg'; 
         const title = '#title-origin-sanctuary';
         const image = '.image-asset'
         const dialouge1 = '#dialouge-one';
         const dialouge2 = '#dialouge-two';

         let tl = gsap.timeline({
            paused: true, 
         });

         let tlout = gsap.timeline({ paused: true });

         tl
         .to(bg, {
            y: "-100dvh",
            duration: 12
         }, 0)
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
            duration: 4
         }, 4)
         // .fromTo(image, {
         //    y: 200
         // }, { 
         //    duration: 4,
         //    y: 0
         // }, 4)
         .from(dialouge2, {
            filter: "blur(20px)",
            opacity: 0,
            duration: 4
         }, 8)
         // .fromTo(image, {
         //    y: 0
         // }, { 
         //    duration: 4,
         //    y: -200
         // }, 8)

         tlout.to(wrapper, {
            y: -150,
         })

         ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: true,
            anticipatePin: 1,
            animation: tl
         })

         ScrollTrigger.create({
            trigger: section,
            start: "60% center",
            end: "bottom top",
            scrub: true,
            animation: tlout
         })
      }, this.scope)
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
}