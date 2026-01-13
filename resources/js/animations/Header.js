import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText';

export class Header{
   constructor() {
      this.ctx = null;
      this.init()
   }

   init() {
      const headerSection = document.getElementById('header-section');
      this.ctx = gsap.context(() => {

         const icon = headerSection.querySelector('#menu-icon')
         const icontarget1 = icon.querySelector('#header-icon-target-1');
         const icontarget2 = icon.querySelector('#header-icon-target-2');
         const icontop = icon.querySelector('#header-icon-top');
         const iconmiddle = icon.querySelector('#header-icon-middle');
         const iconbottom = icon.querySelector('#header-icon-bottom');

         const headerLinks = headerSection.querySelectorAll('.header-links');
         
         let timeline = gsap.timeline({ paused: true, reversed: true })

         timeline
            .to(icontop, {
               morphSVG: icontarget1
            })
            .to(iconbottom, {
               morphSVG: icontarget2
            }, "<")
            .to(iconmiddle, { opacity: 0}, "<")

         icon.addEventListener("click", () => {
            timeline.reversed() ? timeline.play() : timeline.reverse();
         })

         //TODO: pake timeline nanti
         gsap.from(headerLinks, {
            duration: 2,
            ease: 'power1.out',
            y: -100
         })

         headerLinks.forEach(e => {
            const splitter = SplitText.create(e, { type: "words, chars" })
            const hoverTimeline = gsap.to(splitter.chars, {
               paused: true,
               duration: 0.4,
               rotateY: -180,
               stagger: { amount: 0.6}
            })

            e.addEventListener('mouseenter', () => {
               hoverTimeline.play()
            })
            e.addEventListener('mouseleave', () => {
               hoverTimeline.reverse()
            })
         })
      }, headerSection)
   }
}