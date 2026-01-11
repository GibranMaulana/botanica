import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export class RitualSanctuary {
   constructor() {
      this.ctx = null;
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {
         const section = document.getElementById('ritual-sanctuary');
         const imageContainer = section.querySelectorAll('.img-container');
         const productImage = section.querySelectorAll('.theimg');
         const description = section.querySelectorAll('.description');

         const headings = section.querySelectorAll('.headings');
         const splitHeadings = SplitText.create(headings, { type: "words, chars" });
         const headings2 = section.querySelectorAll('.headings2');
         const splitHeadings2 = SplitText.create(headings2, { type: "words, chars" });
         let tl = gsap.timeline();

         tl.fromTo(imageContainer, {
            y: 100,
            opacity: 0.5,
            filter: "blur(20px)",
         }, {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
         })
         .from(splitHeadings.chars, {
            rotateY: -90,
            duration: 0.4,
            stagger: {
               amount: 0.6,
               // from: "start"
            } 
         }, "<")
         .fromTo(description, 
         {
            opacity: 0,
            filter: "blur(20px)",
            y: 0
         }, {
            opacity: 1,
            filter: "blur(0px)",
            y: -100,
            duration: 1

         }, "+=0.5")
         .to(splitHeadings.chars, {
            y: -100,
            opacity: 0
         })
         .to(headings, {
            display: "none"
         })
         .from(headings2, {
            display: "none"
         })
         .from(splitHeadings2.chars, {
            rotateY: -90,
            duration: 0.4,
            stagger: {
               amount: 0.6,
               // from: "start"
            }
         })
         
         
         console.log(tl.totalDuration)

         ScrollTrigger.create({
            markers: true,
            trigger: section,
            start: 'top top',
            end: '+=50%',
            scrub: true,
            animation: tl,
            pin: true,
            anticipatePin: 1
         })
      })
   }

   kill() {
      if(this.ctx) this.ctx.revert();
   }
}