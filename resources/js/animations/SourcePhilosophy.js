import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class SourcePhilosophy {
    constructor(scope) {
        this.scope = scope;
        this.ctx = null;
        this.init();
    }

    init() {
        const section = this.scope.querySelector("#source-philosophy");
        const imgContainerMove1 = section.querySelectorAll(
            ".img-container-move1",
        );
        const imgContainerUnique1 = section.querySelector(
            ".img-container-unique1",
        );
        const imgContainerUnique2 = section.querySelector(
            ".img-container-unique2",
        );

        const imgAsset = section.querySelectorAll(".img-asset");

        this.ctx = gsap.context(() => {
            const timeline = gsap.timeline();

            timeline
                .fromTo(
                    imgContainerMove1,
                    {
                        yPercent: 0,
                    },
                    {
                        yPercent: 0,
                    },
                    0,
                )
                .fromTo(
                    imgContainerUnique1,
                    {
                        yPercent: 20,
                    },
                    {
                        yPercent: -20,
                    },
                    0,
                )
                .fromTo(
                    imgContainerUnique2,
                    {
                        yPercent: 10,
                    },
                    {
                        yPercent: -10,
                    },
                    0,
                )
                .fromTo(
                    imgAsset,
                    {
                        yPercent: 0,
                    },
                    {
                        yPercent: -10,
                    },
                    0,
                );

            ScrollTrigger.create({
                scrub: 0.5,
                trigger: section,
                start: "top bottom",
                end: "center top",
                animation: timeline,
            });
        });
    }

    kill() {
        if (this.ctx) this.ctx.revert();
    }
}
