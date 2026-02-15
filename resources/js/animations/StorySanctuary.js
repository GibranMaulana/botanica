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
        const wrapper = section.querySelector("#wrapper-" + name);
        const dimOffset = section.querySelector("#dim-offset-" + name);

        console.log(section);
        console.log(wrapper);

        this.ctx = gsap.context(() => {
            gsap.set(wrapper, {
                translateY: "-50%",
                zIndex: 1,
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
    }

    kill() {
        if (this.ctx) this.ctx.revert();
    }
}
