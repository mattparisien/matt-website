import React, { useEffect, useRef } from "react";
import Section from "../../../Containers/Section";
import Container from "../../../Containers/Container";
import { Icon } from "../../../Vector/Icons";
import gsap from "gsap";
import CSSRulePlugin from "gsap/src/CSSRulePlugin";
import $, { Tween } from "jquery";
import Link from "../../../Link/Link";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Hero({ featuredItems }) {
	gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

	const heroTitleTl = useRef(gsap.timeline());
	const scrollTl = useRef(null);
	const trigger = useRef(null);
	const scroll = useLocomotiveScroll();

	useEffect(() => {
		if (scroll && scroll.scroll) {
			ScrollTrigger.scrollerProxy(".ScrollWrapper", {
				scrollTop(value) {
					return arguments.length
						? scroll.scroll.scrollTo(value, 0, 0)
						: scroll.scroll.scroll.instance.scroll.y;
				},
				getBoundingClientRect() {
					return {
						top: 0,
						left: 0,
						width: window.innerWidth,
						height: window.innerHeight,
					};
				},
			});
		}

		const scrollTween = gsap.to($(".o-hero_logo .c-char"), {
			opacity: 0,
		});

		scrollTl.current = ScrollTrigger.create({
			trigger: trigger.current,
			scroller: ".ScrollWrapper",
			start: "top top",
			scrub: true,
			animation: scrollTween,
		});

		//Intro animation
		setTimeout(() => {
			const rule = CSSRulePlugin.getRule(
				".o-page_home .o-hero_featuredWork_card:after"
			);
			console.log(rule);
			const title = $(".o-hero_title");
			const chars = title.find(".c-char");
			const logo = $(".o-hero_logo");
			const logoChars = logo.find(".c-char");
			const headerLinks = $("header").find("a");
			gsap.set(title, { opacity: 1 });
			gsap.set(logo, { opacity: 1 });
			heroTitleTl.current
				.to(chars, {
					y: 0,
					opacity: 1,
					stagger: -0.07,
					ease: "power3.out",
					rotate: 0,
					duration: 0.8,
				})
				.to(chars, {
					y: "-100%",
					stagger: -0.07,
				})
				.to(headerLinks, {
					y: 0,
					opacity: 1,
					stagger: 0.1,
					ease: "power.out",
					duration: 0.6,
				})
				.to(
					logoChars,
					{
						y: 0,
						opacity: 1,
						duration: 0.8,

						stagger: 0.04,
						ease: "power3.out",
					},
					1.2
				)
				.to(
					rule,
					{
						cssRule: {
							scaleY: 0,
						},
						duration: 2,
						stagger: 0.2,
						ease: "power3.out",
					},
					1.3
				)
				.set(title, { display: "none" })
				.set(logo, { overflow: "visible" });
		}, 1000);
	}, [scroll]);

	return (
		<Section
			classes='o-hero  -flex -align-center -justify-center'
			ref={trigger}
		>
			<Container classes='-stretchY '>
				<div className='inner -relative -stretchY -flex -align-center -justify-center'>
					{/* <div className='o-hero_featuredWork -flex -absolute -top -left -stretchX'>
						{featuredItems &&
							featuredItems.map(item => (
								<Card
									path={`/projects/${item.id}`}
									src={item.Cover.image.url}
								/>
							))}
					</div> */}
					<div className='o-hero_self'>
						<Icon variant="eyes"/>
						<img src='https://res.cloudinary.com/dzoe0rah1/image/upload/v1647526928/me_b_and_w_5cecd7ce41.jpg'></img>
					</div>

					<h1 className='o-h1 o-hero_title -split '>IDEAS</h1>
					<h2 className='o-h2 o-hero_logo -split -absolute -bottom -left'>
						Matt Parisien
					</h2>
				</div>
			</Container>
		</Section>
	);
}

function Card({ title, src, alt, path }) {
	return (
		<Link classes='o-hero_featuredWork_card' href={path} isRouterLink>
			<div className='image'>
				<img src={src}></img>
			</div>
			<div className='cta'>
				<Icon variant='arrow' disableAnimation/>
				<div className='-text-tiny'>View project</div>
			</div>
		</Link>
	);
}

export default Hero;
