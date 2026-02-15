import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class StorySanctuary {
    constructor(scope) {
        this.scope = scope;
        this.ctx = null;
        this.init();
    }

    init() {
        const name = "story-sanctuary";
        const beforeSection = this.scope.querySelector("#hero-sanctuary");

        const section = this.scope.querySelector("#" + name);
        const title = section.querySelector("#title-" + name);
        const wrapper = section.querySelector("#wrapper-" + name);
        const dimOffset = section.querySelector("#dim-offset-" + name);
        const imgCont1 = section.querySelector("#img-container1-" + name);
        const cont1Second = imgCont1.querySelector(".second");
        const imgCont2 = section.querySelector("#img-container2-" + name);
        const cont2Second = imgCont2.querySelector(".second");

        this.ctx = gsap.context(() => {
            gsap.set(wrapper, {
                translateY: "-50%",
                zIndex: 1,
            });

            gsap.set(dimOffset, {
                backgroundColor: "black",
            });
            // gsap.set(wrapper, { paddingTop: "20%" });

            const timeline = gsap.timeline({ defaults: { ease: "none" } });

            timeline
                .to(
                    wrapper,
                    {
                        translateY: "0",
                        duration: 2,
                    },
                    0,
                )
                // .to(
                //     wrapper,
                //     {
                //         paddingTop: "0%",
                //         duration: 0.5,
                //     },
                //     0,
                // )
                .fromTo(
                    dimOffset,
                    {
                        opacity: 0.5,
                    },
                    {
                        opacity: 0,
                        duration: 1.5,
                    },
                    "<",
                );

            ScrollTrigger.create({
                scrub: true,
                trigger: beforeSection,
                start: "bottom bottom",
                end: "bottom top",
                animation: timeline,
            });
        });

        const enterTimeline = gsap.timeline({ defaults: { ease: "none" } });
        const isMobile = () => window.innerWidth < 640;
        enterTimeline
            .fromTo(title, { yPercent: 50 }, { yPercent: -50, duration: 10 }, 0)
            .fromTo(
                title,
                {
                    autoAlpha: 0,
                },
                {
                    autoAlpha: 1,
                },
                0,
            )
            .fromTo(
                imgCont1,
                {
                    rotation: "20",
                    yPercent: () => (isMobile() ? 20 : 100),
                },
                {
                    rotation: "-20",
                    yPercent: 0,
                    duration: 10,
                },
                0,
            )
            .fromTo(
                imgCont2,
                {
                    rotation: "-20",
                    yPercent: () => (isMobile() ? 20 : 100),
                },
                {
                    rotation: "20",
                    yPercent: 0,
                    duration: 10,
                },
                "<",
            )
            .fromTo(
                cont1Second,
                {
                    clipPath: "inset(0% 0% 100% 0%)",
                },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                },
                5,
            )
            .fromTo(
                cont2Second,
                {
                    clipPath: "inset(100% 0% 0% 0%)",
                },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                },
                "<",
            );

        ScrollTrigger.create({
            scrub: true,
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            animation: enterTimeline,
        });
    }

    kill() {
        if (this.ctx) this.ctx.revert();
    }
}
