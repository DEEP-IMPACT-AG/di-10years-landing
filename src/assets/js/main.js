gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: "#first-container",
		markers: false,
	},
});

tl1.to("#title-1", {
	opacity: 1,
	y: 0,
	x: 0,
	delay: 0,
}, 0.1);

tl1.to("#di-logo", {
	opacity: 1,
	y: 0,
	x: 0,
	delay: 0,
}, 0.2);

tl1.to("#title-2", {
	opacity: 1,
	y: 0,
	x: 0,
	delay: 0,
}, 0.3);

tl1.to("#image-1", {
	opacity: 1,
	y: 0,
	x: 0,
	delay: 0,
}, 0.3);

gsap.to("#giga-text-1", {
	xPercent: -20,
	ease: "none",
	scrollTrigger: {
		trigger: "#giga-text-1",
		start: "top bottom",
		end: "bottom top",
		scrub: true,
	},
});

gsap.to("#space-ship-1", {
	xPercent: 50,
	ease: "none",
	scrollTrigger: {
		trigger: "#space-ship-1",
		start: "top bottom",
		end: "bottom top",
		scrub: true,
	},
});

const tl2 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: "#people-1",
		markers: false,
	},
});

tl2.to("#people-1", {
	opacity: 1,
	y: 0,
	x: 0,
	delay: 0,
}, 0.3);

tl2.to("#list-1 li", {
	opacity: 1,
	y: 0,
	x: 0,
	stagger: 0.1,
	delay: 0.3,
}, 0.3);

tl2.to("#list-1 li em", {
	opacity: 1,
	height: "calc(100% + 100px)",
	stagger: 0.1,
	delay: 0.3,
	duration: 1,
}, 0.3);