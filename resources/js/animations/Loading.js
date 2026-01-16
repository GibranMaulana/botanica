import gsap from "gsap";

export class Loading {
   constructor() {
      this.ctx = null;
      this.init()
   }

   init() {
      this.ctx = gsap.context(() => {
         const overlay = document.getElementById('loader-overlay');
         const first = overlay.querySelector('#loader-first-state');
         const state2 = overlay.querySelector('#loader-second-state');
         // const state3 = overlay.querySelector('#loader-third-state');

         if(!overlay || !first || !state2 ) {
            console.log("loader not loaded");
            return
         }

         const tl = gsap.timeline({
            defaults: { duration: 1.6, ease: "expo.inOut" },
            onComplete: () => {
               gsap.set(overlay.parentElement, { display: 'none' });
            }
        });

        tl.to(first, {
            morphSVG: state2,
            duration: 1.2,
        })

        .to(overlay, {
            scale: 50, 
            duration: 1.2, 
            ease: "power2.in", 
        }, "+=2")

      })
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
}