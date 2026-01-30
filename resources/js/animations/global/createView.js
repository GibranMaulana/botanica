import { ScrollTrigger } from "gsap/ScrollTrigger";

let firstLoad = true;

export const createView = (namespace, animationClasses = []) => {
   let instances = [];

   const initAnimation = (container) => {
      animationClasses.forEach(e => {
         instances.push(new e(container));
      })
   }

   return {
      namespace,
      beforeEnter(data) {

         const container = data.next.container;

         if(firstLoad) {
            window.addEventListener('preloader:complete', () => {
               initAnimation(container);
            }, { once: true});

            firstLoad = false;
         } else {
            initAnimation(container);
         }
      },

      afterLeave(data) {
         instances.forEach(e => {
            e.kill()
         })

         instances = [];
      },

   }
}