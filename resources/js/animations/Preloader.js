import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export class Preloader {
   constructor(lenis) {
      this.ctx = null;
      this.lenis = lenis;
      this.lenis.stop();
   }

   init() {  
      const preloader = document.getElementById('preloader-section');
      
      const heading = preloader.querySelector('.preloader-heading');
      const subtext = preloader.querySelectorAll('.preloader-text');
      const counter = document.getElementById('counter');

      let tl; 

      this.ctx = gsap.context(() => {
         
         tl = gsap.timeline({ 
            onComplete: () => { 
               this.lenis.start();
               preloader.classList.add('hidden');

               ScrollTrigger.refresh(); //update limit size
               requestAnimationFrame(() => {
                  this.lenis.resize();
               })

               // document.documentElement.style.overflow = "";
            }
         });
         
         tl.to(subtext, {
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.1
         })
         .to(heading, {
            y: 0,
            duration: 1.2,
            ease: "expo.out"
         }, "-=0.8")
         .to(counter, {
             textContent: 100,
             duration: 1.5,
             roundProps: "textContent", 
             ease: "power1.inOut",
             snap: { textContent: 5 } 
         }, "<");

         tl.to(preloader, {
            yPercent: -100, 
            duration: 1.2,
            ease: "expo.inOut",
            onStart: () => {
               window.dispatchEvent(new CustomEvent('preloader:complete'));
            }
         })
         .to([heading, subtext, counter], {
             y: 100, 
             duration: 1,
             ease: "expo.inOut"
         }, "<"); 

      }, preloader);

      return tl; 
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
}