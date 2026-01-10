import './bootstrap';
import { initBarba } from './core/barba';
import { registerAllPlugin } from './core/gsap';
import { initLenis } from './core/lenis';

registerAllPlugin();

window.addEventListener('load', () => {
   initLenis();
   initBarba();
})