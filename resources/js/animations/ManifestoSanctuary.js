import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { HoverAnimation } from "./global/Hover";

export class ManifestoSanctuary {
   constructor(scope) {
      this.ctx = null;
      this.scope = scope;
      this.hoverInstances = [];
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {
         const section = this.scope.querySelector('#manifesto-sanctuary');

         const titleContainer = section.querySelector('#title-container')

         const title = section.querySelectorAll('.reveal-title');
         const splitTitle = SplitText.create(title, { type: "words, chars"});

         const pointContainers = section.querySelectorAll('.point-container');

         const button = section.querySelector('#manifesto-button');
         this.hoverInstances.push(new HoverAnimation(button))

         gsap.from(splitTitle.chars, {
            scrollTrigger: {
               trigger: titleContainer, 
               start: "top 75%", 
               end: "top center",        
               toggleActions: "play none none reverse" 
            },
            rotateY: 90,        
            y: 50, 
            autoAlpha: 0, 
            stagger: 0.02, 
            duration: 1.2, 
            ease: "expo.out", 
            transformOrigin: "50% 50% -50px", 
         });

         gsap.from(button, {
            scrollTrigger: {
               trigger: titleContainer, 
               start: "top 75%", 
               end: "top center",        
               toggleActions: "play none none reverse" 
            },
            y: 50, 
            autoAlpha: 0, 
            duration: 1.2, 
            ease: "expo.out", 
            
         });

         pointContainers.forEach(point => {
            const sub = point.querySelectorAll('.reveal-sub');
            const textblur = point.querySelectorAll('.reveal-blur');

            let tl = gsap.timeline({
               scrollTrigger: {
                  trigger: point,
                  start: "top 85%", 
                  toggleActions: "play none none reverse"
               }
            });

            tl.from(sub, {
               y: 60,        
               autoAlpha: 0,          
               stagger: 0.1,
               duration: 1.2,
               ease: "power3.out", 
               clearProps: "all" 
            });

            tl.from(textblur, {
               y: 40,
               autoAlpha: 0,
               duration: 1.2,
               ease: "power2.out", 
               clearProps: "all"
            }, "-=1.0");
         })


      }, this.scope)
   }

   kill() {
      if(this.hoverInstances.length) this.hoverInstances.forEach(e => { e.kill() });
      this.hoverInstances = [];
      if(this.ctx) this.ctx.revert()
   }
}