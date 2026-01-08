import { RevealText } from "../animations/RevealText";

let instances = [];

const sanctuaryView = {
   namespace: "sanctuary",
   beforeEnter(data) {
      const revealTextEl = document.querySelectorAll('.reveal-text');
      
      revealTextEl.forEach(e => {
         instances.push(new RevealText(e));
      })
   },

   afterLeave(data) {
      instances.forEach(e => {
         e.kill();   
      })

      instances = [];
   }
}

export default sanctuaryView;