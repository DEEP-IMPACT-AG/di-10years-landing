gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: "#first-container",
		markers: false,
	},
});

tl.to("#title-1", {
	opacity: 1,
	y: 0,
	x: 0,
	delay: 0,
}, 0.1);

tl.to("#di-logo", {
	opacity: 1,
	y: 0,
	x: 0,
	delay: 0,
}, 0.2);

tl.to("#title-2", {
	opacity: 1,
	y: 0,
	x: 0,
	delay: 0,
}, 0.3);
