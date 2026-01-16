import { Header } from "../animations/Header";
import { CurveLine, LoaderText } from "../animations/loader";
import { Loading } from "../animations/Loading";
import { ManifestoSanctuary } from "../animations/ManifestoSanctuary";
import { OriginSanctuary } from "../animations/OriginSanctuary";
import { RevealText } from "../animations/RevealText";
import { RitualSanctuary } from "../animations/RitualSanctuary";

let instances = [];

const sanctuaryView = {
   namespace: "sanctuary",
   beforeEnter(data) {
      const revealTextEl = document.querySelectorAll('.reveal-text');
      const loaderTextEl = document.querySelectorAll('.loader-text');
      const startCurve = document.querySelectorAll('.curve-start');
      const endCurve = document.getElementById('curve-end');
      
      if (!startCurve || !endCurve || !loaderTextEl) { 
         return
      }
      
      instances.push(new Loading());

      revealTextEl.forEach(e => {
         instances.push(new RevealText(e));
      })

      loaderTextEl.forEach(e => {
         instances.push(new LoaderText(e));
      })

      startCurve.forEach(e => {
         instances.push(new CurveLine(e, endCurve))
      })

      instances.push(new Header());
      instances.push(new OriginSanctuary());
      instances.push(new ManifestoSanctuary());
      instances.push(new RitualSanctuary());
   },

   afterLeave(data) {
      instances.forEach(e => {
         e.kill();   
      })

      instances = [];
   }
}

export default sanctuaryView;