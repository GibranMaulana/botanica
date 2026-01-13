import gsap from 'gsap'

export class Header{
   constructor() {
      this.ctx = null;
      this.init()
   }

   init() {
      this.ctx = gsap.context(() => {
         const icon = document.getElementById('menu-icon');
         const icontarget1 = icon.getElementById('header-icon-target-1');
         const icontarget2 = icon.getElementById('header-icon-target-2');
         const icontop = icon.getElementById('header-icon-top');
         const iconmiddle = icon.getElementById('header-icon-middle');
         const iconbottom = icon.getElementById('header-icon-bottom');
         
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
      })
   }
}