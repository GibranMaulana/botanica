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

            let timeline = gsap.timeline({ defaults: { ease: "none" } });

            gsap.set(image, { scale: 1.5, xPercent: -20 });

            timeline
                .fromTo(
                    title,
                    {
                        transform: "translateY(100%)",
                    },
                    {
                        transform: "translateY(0%)",
                        duration: 10,
                    },
                    0,
                )
                .to(
                    title,
                    {
                        autoAlpha: 0,
                        duration: 1,
                    },
                    "<",
                )
                .fromTo(
                    imageContainer,
                    {
                        transform: "translateX(50%)",
                    },
                    {
                        transform: "translateX(-50%)",
                        duration: 10,
                    },
                    0,
                )
                .fromTo(
                    image,
                    {
                        xPercent: -20,
                        // transform: "translateY(0%)",
                    },
                    {
                        xPercent: 20,
                        // transform: "translateY(-51%)",
                        duration: 10,
                    },
                    0,
                )
                .fromTo(
                    imageContainer,
                    {
                        clipPath: "inset(100% 0% 0% 0%)",
                    },
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        duration: 2,
                    },
                    1,
                )

                .fromTo(
                    dialouge1,
                    {
                        transform: "translateY(-100%)",
                    },
                    {
                        transform: "translateY(0%)",
                        duration: 8,
                    },
                    2,
                )
                .from(
                    dialouge1,
                    {
                        autoAlpha: 0,
                        duration: 1,
                    },
                    "<",
                )

                .fromTo(
                    dialouge2,
                    {
                        transform: "translateY(100%)",
                    },
                    {
                        transform: "translateY(0%)",
                        duration: 5,
                    },
                    5,
                )
                .from(
                    dialouge2,
                    {
                        autoAlpha: 0,
                        duration: 1,
                    },
                    "<",
                );

            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: 0.5,
                animation: timeline,
            });
        }, this.scope);
    }

    kill() {
        if (this.ctx) this.ctx.revert();
    }
}
