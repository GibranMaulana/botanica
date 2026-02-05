import gsap from 'gsap'
import { HoverAnimationUtil } from './global/Hover';

export class ProductsCollection {
   constructor(scope) {
      this.scope = scope;
      this.ctx = null;
      this.hoverInstances = [];
      this.init();
   }

   init() {
      const section = this.scope.querySelector('#products-collection');
      const productCards = section.querySelectorAll('.product-card');
      
      this.ctx = gsap.context(() => {
         const mm = gsap.matchMedia();

         mm.add("(min-width: 640px)", () => {

            productCards.forEach(card => {
               const productImage = card.querySelector('.product-image');
               const productContent = card.querySelector('.product-content');
               const buyButton = card.querySelector('.buy-button');
                  
               gsap.from(productImage, {
                  scrollTrigger: {
                     once: true,
                     trigger: card,
                     start: "center bottom"
                  }, 
                  paused: true,
                  y: "100%",
                  ease: 'power2.inOut',
                  duration: 1,
                  onComplete: () => {
                     this.hoverInstances.push(
                        new HoverAnimationUtil(
                           productImage,
                           card,
                           { scale: 1.1, y: -20, duration: 0.3, ease: "power1.inOut" }
                        )
                     )
                  }
               })
   
               gsap.from(productContent, {
                  scrollTrigger: {
                     once: true,
                     trigger: card,
                     start: "center bottom"
                  }, 
                  paused: true,
                  y: "100%",
                  opacity: 0,
                  ease: 'power2.inOut',
                  duration: 1,
                  onComplete: () => {
                     this.hoverInstances.push(
                        new HoverAnimationUtil(
                           buyButton,
                           card,
                           {
                              letterSpacing: "0.1em", duration: 0.3, ease:'power1.inOut'
                           }
                        )
                     )
                  }
               })
            });
         })

         mm.add("(max-width: 639px)", () => {
            const images = gsap.utils.toArray('.product-image');

            images.forEach((img) => {
               gsap.fromTo(img, 
                  { 
                     xPercent: -15, 
                  }, 
                  {
                     xPercent: 15,  
                     ease: 'none',
                     scrollTrigger: {
                        trigger: img.closest('.product-card'),
                        scroller: section,    
                        horizontal: true,     
                        scrub: 1,          
                        start: "left right",
                        end: "right left"
                     }
               });
            })
         })
      })
   }

   kill() {
      if(this.hoverInstances.length) this.hoverInstances.forEach(e => e.kill());
      this.hoverInstances = [];
      if(this.ctx) this.ctx.revert();
      
   }
}