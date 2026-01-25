import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function initLenis() {

   const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 2,
   })

   lenis.on('scroll', ScrollTrigger.update);

   gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
   }) 

   gsap.ticker.lagSmoothing(0);

   window.lenis = lenis;
   initSmoothAnchors();

   return lenis;
}

function initSmoothAnchors() {
   document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      e.preventDefault();

      const targetId = link.getAttribute('href');
      
      if (targetId && targetId !== '#' && document.querySelector(targetId)) {
         
         window.lenis.scrollTo(targetId, {
            offset: 0, 
            duration: 1.5, 
            easing: (t) => 1 - Math.pow(1 - t, 4), 
         });
      }
   });
}
