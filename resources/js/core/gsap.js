import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export function registerAllPlugin() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(MorphSVGPlugin);
    gsap.registerPlugin(DrawSVGPlugin);

    ScrollTrigger.config({ ignoreMobileResize: true });

    gsap.defaults({
        ease: "power1.in",
        duration: 1,
    });
}
