import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MorphSVGPlugin} from 'gsap/MorphSVGPlugin';

export function registerAllPlugin() {

   gsap.registerPlugin(ScrollTrigger);
   gsap.registerPlugin(SplitText);
   gsap.registerPlugin(MorphSVGPlugin);

   gsap.defaults({
      ease: 'power1.in',
      duration: 1
   });
}