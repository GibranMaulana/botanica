import gsap from 'gsap'
import { HoverAnimationUtil } from './global/Hover';

export class Menu {
   constructor() {
      this.el = document.getElementById('menu-section');
      this.opened = false;
      this.ctx = null;
      this.animation = null;
      this.hoverInstance = [];
      this.init();
   }

   init() {
      this.ctx = gsap.context(() => {

         const linkContainers = this.el.querySelectorAll('.link-container');
         const theLink = this.el.querySelectorAll('.thelink');

         const tl = gsap.timeline({ paused: true});

         tl
         .to(this.el, 
            { translateX: 0, duration: 1, ease: 'expo.inOut'}
         , 0)
         .to(linkContainers,
            { translateX: "0", duration: 1, ease: 'expo.out', stagger: 0.05}
         , 0.5)
         .to(theLink, 
            { translateY: "0", duration: 1, ease: 'expo.out', stagger: 0.05}
         , "<")

         linkContainers.forEach(link => {
            const linkTitle = link.querySelector('.link-title');
            const linkDescription = link.querySelector('.link-description');
            const linkBg = link.querySelector('.link-bg');

            this.hoverInstance.push(

               new HoverAnimationUtil(
                  linkTitle,
                  link,
                  { color:"#F9F7F2", x: "5%", duration: 0.5, ease: 'power3.inOut'} 
               ),
   
               new HoverAnimationUtil(
                  linkDescription,
                  link,
                  { color:"#F9F7F2", x: "-5%", duration: 0.5, ease: 'power3.inOut'} 
               ),
   
               new HoverAnimationUtil(
                  linkBg,
                  link,
                  { translateY: 0, duration: 0.5, ease: 'power3.inOut'}
               )
            )
         })
         
         this.animation = tl;
      })
   }

   toggle() {
      if(this.opened) {
         this.animation.reverse();
         this.opened = false
      } else {
         this.animation.play();
         this.opened = true
      }
   }

   kill() {
      if(this.ctx) this.ctx.revert();
      if(this.hoverInstance > 0) this.hoverInstance.forEach(e => { e.kill() })
      this.hoverInstance = [];
   }
   
}