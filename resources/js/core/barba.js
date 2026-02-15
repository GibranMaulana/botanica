import barba from "@barba/core";
import gsap from "gsap";
import sanctuaryView from "../pages/sanctuary";
import philosophyView from "../pages/philosophy";
import collectionView from "../pages/collection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Preloader } from "../animations/Preloader";

export function initBarba(lenis) {
    barba.init({
        views: [sanctuaryView, philosophyView, collectionView],
        // debug: true,

        transitions: [
            {
                name: "default",

                async once(data) {
                    const preloader = new Preloader(lenis);

                    return preloader.init();
                },

                async leave(data) {
                    const done = this.async();
                    data.current.container.classList.add("barba-leaving");

                    let tl = gsap.timeline({
                        defaults: { ease: "expo.inOut", duration: 1.2 },
                        onComplete: done,
                    });

                    tl.fromTo(
                        ".transition-col",
                        { scaleY: 0, transformOrigin: "bottom" },
                        { scaleY: 1, stagger: 0.05, duration: 0.8 },
                    );

                    tl.to(
                        ".transition-title",
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            ease: "power2.out",
                        },
                        "-=0.4",
                    );

                    tl.to(
                        data.current.container,
                        {
                            y: 100,
                            opacity: 0,
                            duration: 1,
                        },
                        0,
                    );

                    return tl;
                },

                async enter(data) {
                    let tl = gsap.timeline({
                        defaults: { ease: "expo.inOut", duration: 1.2 },
                    });

                    gsap.set(data.next.container, {
                        position: "relative",
                        clearProps: "position",
                    });

                    tl.to(".transition-title", {
                        y: -20,
                        opacity: 0,
                        duration: 0.4,
                    });

                    tl.to(
                        ".transition-col",
                        {
                            scaleY: 0,
                            transformOrigin: "top",
                            stagger: 0.05,
                            duration: 0.8,
                        },
                        "<",
                    );

                    tl.fromTo(
                        data.next.container,
                        { opacity: 0, y: 50, scale: 0.98 },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 1,
                            clearProps: "all",
                        },
                        "-=1.0",
                    );

                    return tl;
                },

                afterLeave(data) {
                    lenis.scrollTo(0, { immediate: true });
                },

                after(data) {
                    requestAnimationFrame(() => {
                        lenis.resize();
                        ScrollTrigger.refresh();
                    });
                },
            },
        ],
    });
}
