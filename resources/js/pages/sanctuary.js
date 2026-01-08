import { CurveLine, LoaderText } from "../animations/loader";
import { RevealText } from "../animations/RevealText";

let instances = [];

const sanctuaryView = {
   namespace: "sanctuary",
   beforeEnter(data) {
      const revealTextEl = document.querySelectorAll('.reveal-text');
      const loaderTextEl = document.querySelectorAll('.loader-text');
      const startCurve = document.getElementById('curve-start');
      const endCurve = document.getElementById('curve-end');
      
      if (!startCurve || !endCurve || !loaderTextEl) { return }
      
      revealTextEl.forEach(e => {
         instances.push(new RevealText(e));
      })

      loaderTextEl.forEach(e => {
         instances.push(new LoaderText(e));
      })

      instances.push(new CurveLine(startCurve, endCurve))
      
   },

   afterLeave(data) {
      instances.forEach(e => {
         e.kill();   
      })

      instances = [];
   }
}

export default sanctuaryView;