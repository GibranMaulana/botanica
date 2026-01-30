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

         once(data) {
            const preloader = new Preloader(lenis);

            return preloader.init();
         },

         async leave(data) {
            const done = this.async(); // Tell Barba we are doing async work
            let tl = gsap.timeline({
                defaults: { ease: "power4.inOut", duration: 1.2 },
                onComplete: done
            });

            // 1. Subtle Parallax on Leaving Content
            // Pushes the current page slightly up/down and fades it out
            // making it feel like the shutter is pushing it away.
            tl.to(data.current.container, {
               y: -50,
               opacity: 0,
               duration: 0.8
            }, 0); 

            // 2. The Shutter closes (From Bottom to Top)
            tl.fromTo('.transition-overlay', 
               { scaleY: 0, transformOrigin: 'bottom' },
               { scaleY: 1 },
               0 // Starts 0.1s after the content starts moving
            );

            return tl;
         },

         enter(data) {
            let tl = gsap.timeline({
               defaults: { ease: "power4.inOut", duration: 1.2 }
           });

           // 1. Prepare the Next Page (Hidden slightly below)
           // We set this immediately before the timeline starts
           gsap.set(data.next.container, { y: 50, opacity: 0 });

           // 2. The Shutter opens (Revealing upwards)
           // By switching origin to 'top', the black box shrinks upwards
           tl.to('.transition-overlay', {
              scaleY: 0,
              transformOrigin: 'top'
           });

           // 3. Bring in the New Content
           // It enters slightly after the shutter starts opening
           tl.to(data.next.container, {
              y: 0,
              opacity: 1,
              clearProps: "all" // Important: clean up inline styles after animation
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