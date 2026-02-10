import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText';
import { Menu } from './Menu';

export class Header{
   constructor(scope) {
      this.ctx = null;
      this.scope = scope;
      this.menu = null;
      this.init()
   }

   init() {
      const headerSection = document.querySelector('#header-section');

      this.ctx = gsap.context(() => {

         const icon = headerSection.querySelector('#menu-icon')
         const icontarget1 = icon.querySelector('#header-icon-target-1');
         const icontarget2 = icon.querySelector('#header-icon-target-2');
         const icontop = icon.querySelector('#header-icon-top');
         const iconmiddle = icon.querySelector('#header-icon-middle');
         const iconbottom = icon.querySelector('#header-icon-bottom');
         const menuOverlay = document.getElementById('menu-section');

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

         const menuInstance = new Menu();

         icon.addEventListener("click", () => {
            timeline.reversed() ? timeline.play() : timeline.reverse();
            menuInstance.toggle()
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
               perspective: 1000,
               transformOrigin: "center center",
               stagger: { amount: 0.6}
            })

            e.addEventListener('mouseenter', () => {
               hoverTimeline.play()
            })
            e.addEventListener('mouseleave', () => {
               hoverTimeline.reverse()
            })
         })
      }, this.scope)
   }

   kill() {
      if(this.ctx) this.ctx.revert();
      if(this.menu) this.menu.kill();
   }
}