import barba from "@barba/core";
import gsap from "gsap";
import sanctuaryView from "../pages/sanctuary";
import philosophyView from "../pages/philosophy";
import collectionView from '../pages/collection';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Preloader } from "../animations/Preloader";

export function initBarba(lenis) {

   barba.init({
      views: [sanctuaryView, philosophyView, collectionView],
      debug: true,

      transitions: [{
         name: 'default',

         async once(data) {
            const preloader = new Preloader(lenis);

            return preloader.init();
         },

         async leave(data) {
            const done = this.async(); 
            let tl = gsap.timeline({
                defaults: { ease: "power4.inOut", duration: 1.2 },
                onComplete: done
            });

            tl.to(data.current.container, {
               y: -50,
               duration: 1
            }, 0); 

            tl.fromTo('.transition-overlay', 
               { scaleY: 0, transformOrigin: 'bottom' },
               { scaleY: 1, onComplete: () => { gsap.set(data.current.container, { opacity: 0})} },
               0 // Starts 0.1s after the content starts moving
            );

            return tl;
         },

         async enter(data) {
            let tl = gsap.timeline({
               defaults: { ease: "power4.inOut", duration: 1.2 }
           });

           tl.to('.transition-overlay', {
              scaleY: 0,
              transformOrigin: 'top'
           });

           tl.fromTo(data.next.container, {
              y: 50,
              opacity: 0,
              
           }, {
               y: 0,
               opacity: 1,
               
           }, 0);

           return tl;
         },

         afterLeave(data) {
            lenis.scrollTo(0, { immediate: true});
         },
         
         after(data) {

            requestAnimationFrame(() => {
               lenis.resize();
               ScrollTrigger.refresh();
            })
         }
      }]
   })
}