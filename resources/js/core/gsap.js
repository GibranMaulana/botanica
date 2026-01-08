import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function registerAllPlugin() {

   gsap.registerPlugin(ScrollTrigger);

   gsap.defaults({
      ease: 'power1.in',
      duration: 1
   });
}