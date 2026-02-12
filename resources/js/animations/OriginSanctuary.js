import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export class OriginSanctuary {
    constructor(scope) {
        this.ctx = null;
        this.scope = scope;
        this.init();
    }

    init() {
        this.ctx = gsap.context(() => {
            const section = "#origin-sanctuary";
            const wrapper = "#origin-wrapper";
            const title = "#title-origin-sanctuary";
            const imageContainer = "#image-container";
            const image = ".image-asset";
            const dialouge1 = "#dialouge-one";
            const dialouge2 = "#dialouge-two";

            let tl = gsap.timeline({
                paused: true,
            });

            // tl.fromTo(
            //     image,
            //     {
            //         y: 400,
            //     },
            //     {
            //         y: 0,
            //         duration: 12,
            //     },
            //     0,
            // )
            tl.fromTo(
                imageContainer,
                {
                    clipPath: "inset(0% 0% 100% 0%)",
                },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    duration: 4,
                },
                4,
            )

                .fromTo(
                    dialouge1,
                    {
                        autoAlpha: 0,
                        y: 50,
                    },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 4,
                    },
                    4,
                )

                .fromTo(
                    title,
                    {
                        autoAlpha: 1,
                    },
                    {
                        autoAlpha: 0,
                        duration: 2,
                    },
                    4,
                )

                .fromTo(
                    dialouge2,
                    {
                        autoAlpha: 0,
                        y: 50,
                    },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 4,
                    },
                    8,
                );

            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
                animation: tl,
            });
        }, this.scope);
    }

    kill() {
        if (this.ctx) this.ctx.revert();
    }
}
