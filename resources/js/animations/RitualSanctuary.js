import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { HoverAnimation } from './global/Hover';

export class RitualSanctuary {
   constructor(scope) {
      this.ctx = null;
      this.scope = scope;
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {
         const section = this.scope.querySelector('#ritual-sanctuary');
         const products = section.querySelectorAll('.product-wrapper');
         const intro = section.querySelector('#ritual-intro');
         
         if (products.length < 2) return;

         const p1 = this.getProductElements(products[0]);
         const p2 = this.getProductElements(products[1]);

         const split1 = new SplitText(p1.mainHeading, { type: "chars" });
         const split2 = new SplitText(p2.mainHeading, { type: "chars" });

         let tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
               trigger: section,
               start: 'top top',
               end: 'bottom bottom',
               scrub: 0.5, 
            }
         });

         tl.to(intro, { 
            autoAlpha: 0, 
            scale: 1.1, 
            duration: 2, 
            ease: "power1.in" 
         }, 0); 

         tl.to(p1.img, { autoAlpha: 1, scale: 1, y: 0, duration: 2 })
           .to(p1.desc, { autoAlpha: 1, y: 0, duration: 2 }, "<")
           .to(p1.sub, { autoAlpha: 1, x: 0, duration: 2 }, "<")
           .to(p1.btn, { y: 0, duration: 2 }, "<")
           .from(split1.chars, { 
               opacity: 0, rotateY: 90, stagger: 0.1, duration: 2 
           }, "<");

         tl.addLabel("exit_p1", "+=1") 
           
           .to(split1.chars, {
               rotateY: -90, 
               x: -50,       
               opacity: 0,
               stagger: 0.05, 
               duration: 1.5
           }, "exit_p1")

           .to(p1.img, { autoAlpha: 0, y: -50, duration: 1.5 }, "exit_p1")
           .to(p1.desc, { autoAlpha: 0, y: -20, duration: 1.5 }, "exit_p1")
           .to(p1.sub, { autoAlpha: 0, x: -20, duration: 1.5 }, "exit_p1")
           .to(p1.btn, { y: 100, duration: 1.5 }, "exit_p1") // Drop button down
           
           .set(p1.container, { autoAlpha: 0 }, ">"); 

         // ==================================================
         tl.addLabel("enter_p2") 
           
           .set(p2.container, { autoAlpha: 1 }, "enter_p2") 
           
           .to(p2.img, { autoAlpha: 1, scale: 1, y: 0, duration: 2 }, "enter_p2")
           .to(p2.desc, { autoAlpha: 1, y: 0, duration: 2 }, "enter_p2")
           .to(p2.sub, { autoAlpha: 1, x: 0, duration: 2 }, "enter_p2")
           .to(p2.btn, { y: 0, duration: 2 }, "enter_p2")
           .from(split2.chars, { 
               opacity: 0, rotateY: 90, stagger: 0.1, duration: 2 
           }, "enter_p2");

         tl.to({}, { duration: 2 }); 

         new HoverAnimation(p1.btn);
         new HoverAnimation(p2.btn);

      }, this.scope)
   }

   getProductElements(wrapper) {
      return {
         container: wrapper,
         desc: wrapper.querySelector('.description'),
         img: wrapper.querySelector('.theimg'),
         sub: wrapper.querySelector('.sub-heading'),
         mainHeading: wrapper.querySelector('.main-heading'),
         btn: wrapper.querySelector('.button')
      };
   }

   kill() { if(this.ctx) this.ctx.revert(); }
}