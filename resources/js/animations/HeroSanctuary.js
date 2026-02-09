import gsap from 'gsap';
import { HoverAnimation } from './global/Hover';

export class HeroSanctuary {
   constructor(scope) {
      this.scope = scope;
      this.ctx = null;
      this.hoverInstances = []
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {
         const heroSection = this.scope.querySelector("#hero-sanctuary");
         const videoBg = "video"; 
         const title = "#title-hero-sanctuary h1";
         const curveStart = "#curve-start";
         const curveEnd = "#curve-end"; 
         const dimmer = heroSection.querySelector('#hero-dimmer');         
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
               this.hoverInstances.push(new HoverAnimation(button));
            } }, 
            0.8
         );


         gsap.to(dimmer, { 
            opacity: 0.8, 
            scrollTrigger: {
               trigger: heroSection,
               start: 'top top', 
               end: 'bottom top',
               scrub: true,
            }
});

      }, this.scope);
   }

   kill() {
      if(this.hoverInstances.length) this.hoverInstances.forEach(e => { e.kill() });
      this.hoverInstances = [];
      if (this.ctx) this.ctx.revert();
   }
}