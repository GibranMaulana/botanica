import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export class RitualSanctuary {
   constructor(scope) {
      this.ctx = null;
      this.scope = scope;
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {
         const section = document.getElementById('ritual-sanctuary');
         const imageContainer1 = section.querySelectorAll('.img-container1');
         const imageContainer2 = section.querySelectorAll('.img-container2');
         const productImage = section.querySelectorAll('.theimg');
         const description1 = section.querySelectorAll('.description1');
         const description2 = section.querySelectorAll('.description2');
         const bg = document.getElementById('ritual-bg');

         const headings = section.querySelectorAll('.headings');
         const splitHeadings = SplitText.create(headings, { type: "words, chars" });
         const headings2 = section.querySelectorAll('.headings2');
         const splitHeadings2 = SplitText.create(headings2, { type: "words, chars" });
         
         let tlproduct1 = gsap.timeline();
         let tlproduct2 = gsap.timeline();
         let tltransition = gsap.timeline();

         tlproduct1
         .to(bg, {
            y: "-150dvh",
            duration: 5.6 
         }, 0)
         .fromTo(imageContainer1, {
            y: 100,
            opacity: 0.5,
            filter: "blur(20px)",
         }, {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
         }, 0)
         .from(splitHeadings.chars, {
            rotateY: -90,
            duration: 0.4,
            stagger: {
               amount: 0.6,
               // from: "start"
            } 
         }, 0)
         .fromTo(description1, 
         {
            opacity: 0,
            filter: "blur(20px)",
            y: 100
         }, {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1

         }, 0.5)
         .from(imageContainer1, { duration: 1});
        
         tltransition.to(splitHeadings.chars, { rotateY: 90, stagger: {amount: 0.4} }, 2.5)
         .to(imageContainer1, { y: -100, opacity: 0, filter: "blur(20px)" }, "<")
         .to(description1, { y:-200, opacity: 0, filter: "blur(20px)" }, "<")
         .to(headings, { display: "none", duration: 0 })
         .to(imageContainer1, { display: "none", duration: 0}, "<")
         .to(description1, { display: "none", duration: 0}, "<")
         .from(imageContainer2, { display: "none", duration: 0})
         .from(headings2, { display: "none", duration: 0 }, "<")
         .from(description2, { display: "none", duration: 0 }, "<")
         
         tlproduct2.from(splitHeadings2.chars, {
            rotateY: -90,
            duration: 0.4,
            stagger: {
               amount: 0.6,
            }
         }, 3.9)
         .fromTo(imageContainer2, 
            { y: 100, filter: "blur(20px)", opacity: 0 },
            { y: 0, filter: "blur(0px)", opacity: 1, duration: 1}, 4.5
         )
         .fromTo(description2, 
         {
            opacity: 0,
            filter: "blur(20px)",
            y: 100
         }, {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1

         }, 4.6)

         const mastertimeline = gsap.timeline().add(tlproduct1, "<").add(tltransition, "<").add(tlproduct2, "<") 

         ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: '+=250%',
            scrub: true,
            animation: mastertimeline,
            pin: true,
            anticipatePin: 1
         })
      }, this.scope)
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
}