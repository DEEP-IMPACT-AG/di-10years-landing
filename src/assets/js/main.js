gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: ".test",
		markers: false,
	},
});

tl.to(".test", {
	opacity: 1,
	y: 0,
	x: 0,
	delay: 0,
});
