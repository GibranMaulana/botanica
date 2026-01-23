import barba from "@barba/core";
import gsap from "gsap";
import sanctuaryView from "../pages/sanctuary";
import philosophyView from "../pages/philosophy";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Preloader } from "../animations/Preloader";

export function initBarba(lenis) {

   barba.init({
      views: [sanctuaryView, philosophyView],
      debug: true,

      transitions: [{
         name: 'default',

         once(data) {
            const preloader = new Preloader(lenis);

            return preloader.init();
         },

         leave(data) {
            let tl = gsap.timeline();

            tl.to(data.current.container, {
               filter: "blur(20px)",
               opacity: 0
            })
            
            return tl;
         },

         enter(data) {
            let tl = gsap.timeline();

            lenis.scrollTo(0, { immediate: true});

            tl.from(data.next.container,  {
               filter: "blur(20px)",
               opacity: 0
            })

            return tl;
         },

         after(data) {
            lenis.resize();
            ScrollTrigger.refresh();
         }
      }]
   })
}