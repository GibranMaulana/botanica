import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'; 

// Uncomment line above if you have Club GSAP. 
// If not, we use the fallback scaling method below.

export class HeroSanctuary {
   constructor(scope) {
      this.scope = scope;
      this.ctx = null;
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {
         // --- SELECTORS (Scoped strings) ---
         const heroSection = "#hero-sanctuary";
         const videoBg = "video"; // Targeting the <video> tag
         const title = "#title-hero-sanctuary h1";
         const curveStart = "#curve-start";
         const curveEnd = "#curve-end"; // Hidden path for reference
         
         // Select all elements with 'loader-text' EXCLUDING the title (handled separately)
         // We use :not() to avoid double-animating the h1
         const secondaryText = ".loader-text:not(#title-hero-sanctuary)";

         // --- TIMELINE ---
         const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            delay: 0.2 // Small breathing room after preloader finishes
         });

         // 1. Video Subtle Zoom Out (Cinematic Base)
         // Starts zoomed in (1.2) and settles to normal (1)
         tl.fromTo(videoBg, 
            { scale: 1.2, filter: "brightness(0.5)" }, 
            { scale: 1, filter: "brightness(1)", duration: 2.5, ease: "expo.out" }, 
            0
         );

         // 2. The Title Reveal (Masked Rise)
         // Assumes the parent <div> has overflow-hidden
         tl.fromTo(title, 
            { yPercent: 110, opacity: 0, rotate: 2 }, 
            { yPercent: 0, opacity: 1, rotate: 0, duration: 1.2 }, 
            0.3 // Overlaps slightly with video
         );

         // 3. The Curve Animation
         // OPTION A: If you have MorphSVG (The "Liquid" Morph)
         tl.to(curveStart, { 
             morphSVG: curveEnd, 
             duration: 1.5, 
             ease: "elastic.out(1, 0.5)" 
         }, 0.5);

         // OPTION B: No Plugin (The "Draw" Expansion)
         // We simply scale the SVG from the center outward. 
         // It looks very clean for underlines.
         // tl.fromTo(curveStart, 
         //    { scaleX: 0, transformOrigin: "center center", opacity: 0 },
         //    { scaleX: 1, opacity: 1, duration: 1.2, ease: "expo.out" },
         //    0.5
         // );

         // 4. Secondary Text Stagger
         // Reveals the description, date, and button
         tl.fromTo(secondaryText, 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, stagger: 0.1, duration: 1 }, 
            0.8
         );

      }, this.scope);
   }

   kill() {
      if (this.ctx) this.ctx.revert();
   }
}