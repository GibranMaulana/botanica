import { loader } from './animations/loader';
import './bootstrap';
import { initBarba } from './core/barba';
import { registerAllPlugin } from './core/gsap';
import { initLenis } from './core/lenis';
import { gsap } from 'gsap/gsap-core';

registerAllPlugin();

window.addEventListener('load', () => {
   initLenis();
   initBarba();

   loader();
})


