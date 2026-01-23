import gsap from "gsap";

export class Preloader {
   constructor() {
      this.ctx = null;
      this.init()
   }

   init() {  
      const preloader = document.getElementById('preloader-section');
      const heading = preloader.querySelector('.preloader-heading');

      this.ctx = gsap.context(() => {
         const timeline = gsap.timeline({ onComplete:() => { 
            preloader.classList.add('hidden')
         }});

         timeline
         .to(heading, {
            y: 100,
            opacity: 0,
            ease: 'power1.in'
         })
         .to(preloader, {
            scaleY: 0,
            duration: 1,
            ease: 'expo.in'
         })
      }, preloader)
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
}