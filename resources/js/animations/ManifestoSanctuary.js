import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export class ManifestoSanctuary {
   constructor(scope) {
      this.ctx = null;
      this.scope = scope;
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {
         const section = this.scope.querySelector('#manifesto-sanctuary');

         const title = section.querySelectorAll('.reveal-title');
         const splitTitle = SplitText.create(title, { type: "words, chars"});

         const sub = section.querySelectorAll('.reveal-sub');
         const splitSub = SplitText.create(sub, { type: "words, chars" });

         const textblur = section.querySelectorAll('.reveal-blur');

         let tl = gsap.timeline({ paused: true});

         tl.from(splitTitle.chars, {
            rotateY: -90,        
            opacity: 0,          
            stagger: 0.1,
            opacity: 0,
            duration: 1,
         })
         .from(splitSub.chars, {
            rotateY: -90,        
            opacity: 0,          
            stagger: 0.1,
            opacity: 0
         })
         .from(textblur, {
            filter: "blur(20px)"
         })

         ScrollTrigger.create({
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 1.5,
            animation: tl,
         })
      }, this.scope)
   }

   kill() {
      if(this.ctx) this.ctx.revert()
   }
}