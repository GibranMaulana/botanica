import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export class ProcessPhilosophy {
    constructor(scope) {
        this.ctx = null;
        this.scope = scope;
        this.init();
    }

    buildPath(svg, imgContainers) {
        const svgRect = svg.getBoundingClientRect();
        const points = Array.from(imgContainers).map((el) => {
            const r = el.getBoundingClientRect();
            const gsapY = gsap.getProperty(el, "y") || 0;
            return {
                x: r.left + r.width / 2 - svgRect.left,
                y: r.top + r.height / 2 - svgRect.top - gsapY,
            };
        });

        const [p1, p2, p3] = points;
        const cx1 = (p1.x + p2.x) / 2;
        const cx2 = (p2.x + p3.x) / 2;

        return `M ${p1.x} ${p1.y} C ${cx1} ${p1.y}, ${cx1} ${p2.y}, ${p2.x} ${p2.y} C ${cx2} ${p2.y}, ${cx2} ${p3.y}, ${p3.x} ${p3.y}`;
    }

    init() {
        const beforeSection = this.scope.querySelector("#source-philosophy");
        const section = this.scope.querySelector("#process-philosophy");
        const wrapper = section.querySelector("#wrapper-process-philosophy");
        const dimOffset = section.querySelector("#dim-offset-process-philosophy");

        this.ctx = gsap.context(() => {
            // Entrance: slide up as source-philosophy scrolls out
            gsap.set(wrapper, { translateY: "-50%", zIndex: 1 });
            gsap.set(dimOffset, { backgroundColor: "black" });

            const entranceTl = gsap.timeline({ defaults: { ease: "none" } });
            entranceTl
                .to(wrapper, { translateY: "0", duration: 2 }, 0)
                .fromTo(dimOffset, { opacity: 0.5 }, { opacity: 0, duration: 1.5 }, "<");

            ScrollTrigger.create({
                scrub: true,
                trigger: beforeSection,
                start: "bottom bottom",
                end: "bottom top",
                animation: entranceTl,
            });

            // Phase 1: images gather to top then return to natural positions
            const row = section.querySelector("#process-img-row");
            const svg = section.querySelector("#process-svg");
            const path = section.querySelector("#process-path");
            const imgs = section.querySelectorAll("[data-process-img]");

            const rowRect = row.getBoundingClientRect();
            const offsets = Array.from(imgs).map((img) => {
                const r = img.getBoundingClientRect();
                return rowRect.top - r.top;
            });

            const gatherTl = gsap.timeline({ defaults: { ease: "none" } });
            gatherTl
                .fromTo(imgs[1], { y: offsets[1] }, { y: 0, duration: 1 }, 0)
                .fromTo(imgs[2], { y: offsets[2] }, { y: 0, duration: 0.9 }, 0.1);

            ScrollTrigger.create({
                trigger: section,
                start: "top bottom",
                end: "center bottom",
                scrub: 1,
                animation: gatherTl,
            });

            // Phase 2: draw the line
            const setPath = () => {
                path.setAttribute("d", this.buildPath(svg, imgs));
            };

            setPath();
            gsap.set(path, { drawSVG: "0%" });

            const lineTl = gsap.timeline({ defaults: { ease: "none" } });
            lineTl.to(path, { drawSVG: "100%", duration: 1 });

            ScrollTrigger.create({
                trigger: section,
                start: "center bottom",
                end: "bottom bottom",
                scrub: 1,
                animation: lineTl,
                onRefresh: setPath,
            });
        });
    }

    kill() {
        if (this.ctx) this.ctx.revert();
    }
}
