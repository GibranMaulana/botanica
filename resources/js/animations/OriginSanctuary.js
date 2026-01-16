import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class OriginSanctuary  {
   constructor() {
      this.ctx = null;
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {

         const section = document.getElementById('origin-sanctuary');
         const wrapper = document.getElementById('origin-wrapper');
         const title = document.getElementById('title-origin-sanctuary');
         const image = section.querySelectorAll('.image-asset');
         const dialouge1 = document.getElementById('dialouge-one');
         const dialouge2 = document.getElementById('dialouge-two');

         let tl = gsap.timeline({
            paused: true, 
         });

         let tlout = gsap.timeline({ paused: true });

         tl
         .fromTo(image, {
            filter: "blur(0px)",
            opacity: 1,
         }, {
            filter: "blur(20px)",
            opacity: 0.5,
            duration: 4
         })
         .from(title, {
            filter: "blur(10px)",
            opacity: 0,
            y:50,
            duration: 4
         }, "<")
         .from(dialouge1, {
            filter: "blur(20px)",
            opacity: 0,
            duration: 4
         })
         .from(dialouge2, {
            filter: "blur(20px)",
            opacity: 0,
            duration: 4
         })

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
      })
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
}