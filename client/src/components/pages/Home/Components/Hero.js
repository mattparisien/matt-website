import React, { useEffect, useRef } from "react";
import Section from "../../../Containers/Section";
import Container from "../../../Containers/Container";
import { Icon } from "../../../Vector/Icons";
import gsap from "gsap";
import CSSRulePlugin from "gsap/src/CSSRulePlugin";
import $ from "jquery";
import Link from "../../../Link/Link";

function Hero({ featuredItems }) {
	gsap.registerPlugin(CSSRulePlugin);

	const heroTitleTl = useRef(gsap.timeline());

	//Intro animation
	useEffect(() => {
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
						duration: 1.8,
						stagger: 0.2,
						ease: "expo.inOut",
					},
					1.3
				)
				.set(title, { display: "none" });
		}, 1000);
	}, []);

	return (
		<Section classes='o-hero  -flex -align-center -justify-center'>
			<Container classes='-stretchY '>
				<div className='inner -relative -stretchY -flex -align-center -justify-center'>
					<div className='o-hero_featuredWork -flex -absolute -top -left -stretchX'>
						{featuredItems &&
							featuredItems.map(item => (
								<Card
									path={`/projects/${item.id}`}
									src={item.Cover.image.url}
								/>
							))}
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
				<Icon variant='arrow' />
				<div className='-text-tiny'>View project</div>
			</div>
		</Link>
	);
}

export default Hero;
