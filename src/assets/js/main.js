gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: '#first-container',
		markers: false,
	},
});

tl1.to(
	'#title-1',
	{
		opacity: 1,
		y: 0,
		x: 0,
		delay: 0,
	},
	0.1
);

tl1.to(
	'#di-logo',
	{
		opacity: 1,
		y: 0,
		x: 0,
		delay: 0,
	},
	0.2
);

tl1.to(
	'#title-2',
	{
		opacity: 1,
		y: 0,
		x: 0,
		delay: 0,
	},
	0.3
);

tl1.to(
	'#image-1',
	{
		opacity: 1,
		y: 0,
		x: 0,
		delay: 0,
		scrollTrigger: '#image-1',
	},
	0.3
);

gsap.to('#giga-text-1', {
	xPercent: -20,
	ease: 'none',
	scrollTrigger: {
		trigger: '#giga-text-1',
		start: 'top bottom',
		end: 'bottom top',
		scrub: true,
	},
});

gsap.to('#space-ship-1', {
	xPercent: 50,
	ease: 'none',
	scrollTrigger: {
		trigger: '#space-ship-1',
		start: 'top bottom',
		end: 'bottom top',
		scrub: true,
	},
});

const tl2 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: '#people-1',
		markers: false,
	},
});

tl2.to(
	'#people-1',
	{
		opacity: 1,
		y: 0,
		x: 0,
		delay: 0,
	},
	0.3
);

tl2.to(
	'#list-1 li',
	{
		opacity: 1,
		y: 0,
		x: 0,
		stagger: 0.1,
		delay: 0.3,
	},
	0.3
);

tl2.to(
	'#list-1 li em',
	{
		opacity: 1,
		height: 'calc(100% + 100px)',
		stagger: 0.1,
		delay: 0.3,
		duration: 1,
	},
	0.3
);

const tl3 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: '#image-2',
		markers: false,
	},
});

tl3.to(
	'#image-2',
	{
		opacity: 1,
		y: 0,
		x: 0,
		delay: 0,
	},
	0.3
);

tl3.to(
	'#people-2',
	{
		opacity: 1,
		y: 0,
		x: 0,
		delay: 0.9,
		scrollTrigger: '#people-2',
	},
	0.3
);

tl3.to(
	'#list-2 li',
	{
		opacity: 1,
		y: 0,
		x: 0,
		stagger: 0.3,
		delay: 0.3,
	},
	0.3
);

tl3.to(
	'#list-2 li em',
	{
		opacity: 1,
		height: 'calc(100% + 100px)',
		stagger: 0.1,
		delay: 0.6,
		duration: 1,
	},
	0.3
);

gsap.to('#ava-x-scroll .flex', {
	xPercent: -20,
	ease: 'none',
	scrollTrigger: {
		trigger: '#ava-x-scroll',
		start: 'top bottom',
		end: 'bottom top',
		scrub: true,
	},
});

const tl4 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: '#list-3',
		markers: false,
	},
});

tl4.to(
	'#list-3 li',
	{
		opacity: 1,
		y: 0,
		x: 0,
		stagger: 0.3,
		delay: 0.3,
	},
	0.3
);

tl4.to(
	'#list-3 li em',
	{
		opacity: 1,
		height: 'calc(100% + 100px)',
		stagger: 0.1,
		delay: 0.6,
		duration: 1,
	},
	0.3
);

const tl5 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: '#best-of-swiss',
		markers: false,
	},
});

tl5.to(
	'#best-of-swiss',
	{
		opacity: 1,
		y: 0,
		x: 0,
		delay: 0.9,
	},
	0
);

let mm = gsap.matchMedia();

mm.add('(min-width: 991px)', () => {
	// this setup code only runs when viewport is at least 800px wide
	tl5.to('#best-of-swiss-images', {
		opacity: 1,
		y: 0,
		x: 0,
		delay: 0.3,
	});
});

mm.add('(max-width: 991px)', () => {
	// this setup code only runs when viewport is at least 800px wide
	tl5.to('#best-of-swiss-images', {
		opacity: 1,
		y: '-50%',
		x: 0,
		delay: 0.3,
	});
});

const tl6 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: '#image-3',
		markers: false,
	},
});

tl6.to(
	'#image-3',
	{
		opacity: 1,
		y: 0,
		x: 0,
		delay: 0.6,
	},
	0
);

tl6.to(
	'#list-4 li',
	{
		opacity: 1,
		y: 0,
		x: 0,
		stagger: 0.3,
		delay: 0.6,
	},
	0.6
);

const tl7 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: '#numbers-1',
		markers: false,
	},
});

tl7
	.to('#numbers-1', {
		opacity: 1,
		y: 0,
		x: 0,
		delay: 0.3,
	})
	.to(
		'#numbers-1 span',
		{
			innerText: 42000,
			duration: 3,
			snap: {
				innerText: 1,
			},
			delay: 0,
		},
		0
	);

const tl8 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: '#image-4',
		markers: false,
	},
});

tl8.to(
	'#image-4',
	{
		opacity: 1,
		y: 0,
		x: 0,
		delay: 0,
	},
	0.3
);

const tl9 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: '#list-5',
		markers: false,
	},
});

tl9.to(
	'#list-5 li',
	{
		opacity: 1,
		y: 0,
		x: 0,
		stagger: 0.3,
		delay: 0.3,
	},
	0.3
);

tl9.to(
	'#list-5 li em',
	{
		opacity: 1,
		height: 'calc(100% + 100px)',
		stagger: 0.1,
		delay: 0.6,
		duration: 1,
	},
	0.3
);

tl9.to(
	'#people-4',
	{
		opacity: 1,
		y: 0,
		x: 0,
		delay: 0.9,
		scrollTrigger: '#people-4',
	},
	0.3
);

const tl10 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: '#list-6',
		markers: false,
	},
});

tl10.to(
	'#list-6 li',
	{
		opacity: 1,
		y: 0,
		x: 0,
		stagger: 0.3,
		delay: 0.3,
	},
	0.3
);

tl10.to(
	'#list-6 li em',
	{
		opacity: 1,
		height: 'calc(100% + 100px)',
		stagger: 0.1,
		delay: 0.6,
		duration: 1,
	},
	0.3
);

tl10
	.to(
		'#numbers-2',
		{
			opacity: 1,
			y: 0,
			x: 0,
			delay: 0,
			trigger: '#numbers-2',
		},
		0
	)
	.to(
		'#numbers-2 span',
		{
			innerText: 492248,
			duration: 3,
			snap: {
				innerText: 1,
			},
			delay: 0,
			trigger: '#numbers-2',
		},
		0
	)
	.to(
		'#numbers-3',
		{
			opacity: 1,
			y: 0,
			x: 0,
			trigger: '#numbers-3',
		},
		0
	)
	.to(
		'#numbers-3 span',
		{
			innerText: 1073534,
			duration: 3,
			snap: {
				innerText: 1,
			},
			delay: 0.3,
			trigger: '#numbers-3',
		},
		0
	);

const tl11 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: '#image-5',
		markers: false,
	},
});

tl11.to(
	'#image-5',
	{
		opacity: 1,
		y: 0,
		x: 0,
		delay: 0,
	},
	0.3
);

const tl12 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: '#list-7',
		markers: false,
	},
});

tl12.to(
	'#list-7 li',
	{
		opacity: 1,
		y: 0,
		x: 0,
		stagger: 0.3,
		delay: 0.3,
	},
	0.3
);

tl12.to(
	'#list-7 li em',
	{
		opacity: 1,
		height: 'calc(100% + 100px)',
		stagger: 0.1,
		delay: 0.6,
		duration: 1,
	},
	0.3
);

const tl13 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: '#image-6',
		markers: false,
	},
});

tl13.to(
	'#image-6',
	{
		opacity: 1,
		y: 0,
		x: 0,
		delay: 0,
	},
	0.3
);

const tl14 = gsap.timeline({
	smoothChildTiming: true,
	scrollTrigger: {
		trigger: '#list-8',
		markers: false,
	},
});

tl14.to(
	'#list-8 li',
	{
		opacity: 1,
		y: 0,
		x: 0,
		stagger: 0.3,
		delay: 0.3,
	},
	0.3
);

tl14.to(
	'#list-8 li em',
	{
		opacity: 1,
		height: 'calc(100% + 100px)',
		stagger: 0.1,
		delay: 0.6,
		duration: 1,
	},
	0.3
);


gsap.to('#giga-text-2', {
	xPercent: -20,
	ease: 'none',
	scrollTrigger: {
		trigger: '#giga-text-2',
		start: 'top bottom',
		end: 'bottom top',
		scrub: true,
	},
});