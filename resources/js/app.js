import "./bootstrap";
import { initBarba } from "./core/barba";
import { registerAllPlugin } from "./core/gsap";
import { initLenis } from "./core/lenis";

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

registerAllPlugin();

window.addEventListener("load", () => {
    const lenis = initLenis();

    lenis.scrollTo(0, { immediate: true }); //paksa keatas, ngga tau alternative nya gimana

    initBarba(lenis);
});
