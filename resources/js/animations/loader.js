import gsap from "gsap";

export function loader() {

   const start = document.getElementById('curve-start');
   const end = document.getElementById('curve-end');
   
   if (!start || !end) { return }
   
   gsap.to(start, {
      duration: 1.5, 
      morphSVG: { shape: end},
      ease: 'power4.out'
   })
}
