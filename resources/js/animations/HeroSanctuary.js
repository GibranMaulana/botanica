import gsap from 'gsap';
import { HoverAnimation } from './global/Hover';

export class HeroSanctuary {
   constructor(scope) {
      this.scope = scope;
      this.ctx = null;
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {
         const heroSection = this.scope.querySelector("#hero-sanctuary");
         const videoBg = "video"; 
         const title = "#title-hero-sanctuary h1";
         const curveStart = "#curve-start";
         const curveEnd = "#curve-end"; 
         
         const explanationText = heroSection.querySelector('.explanation-text')
         const button = heroSection.querySelector(".hero-button");
         const establisedText = heroSection.querySelector('.est-text');
         
         const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            delay: 0.2 
         });

         tl.fromTo(videoBg, 
            { scale: 1.2, filter: "brightness(0.5)" }, 
            { scale: 1, filter: "brightness(1)", duration: 2.5, ease: "expo.out" }, 
            0
         );

         tl.fromTo(title, 
            { yPercent: 110, opacity: 0, rotate: 2 }, 
            { yPercent: 0, opacity: 1, rotate: 0, duration: 1.2 }, 
            0.3 
         );

         tl.to(curveStart, { 
             morphSVG: curveEnd, 
             duration: 1.5, 
             ease: "elastic.out(1, 0.5)" 
         }, 0.5);


         tl.fromTo([button, explanationText, establisedText], 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, stagger: 0.1, duration: 1, onComplete: () => {
               new HoverAnimation(button);
            } }, 
            0.8
         );

         gsap.fromTo(heroSection,
         {
            filter: "brightness(1) grayscale(0%)"
         }, 
         {
            scrollTrigger: {
               trigger: heroSection,
               start: '20% top',
               end: 'bottom top',
               scrub: true,
            },
            filter: "brightness(0.4) grayscale(100%)" //this is the end effect right?
         })

      }, this.scope);
   }

   kill() {
      if (this.ctx) this.ctx.revert();
   }
}