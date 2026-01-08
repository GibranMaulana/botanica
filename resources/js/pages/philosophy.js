import { RevealText } from "../animations/RevealText";

let instances = [];

const philosophyView = {
   namespace: "philosophy",
   beforeEnter(data) {
      const els = document.querySelectorAll('.reveal-text');
      els.forEach(e => {
         instances.push(new RevealText(e));
      })
   },

   afterLeave(data) {
      instances.forEach(e => {
         e.kill();
      })
   }
}

export default philosophyView;