import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/src/CSSRulePlugin";
import $ from "jquery";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Container from "../../../Containers/Container";
import Section from "../../../Containers/Section";
import { Icon } from "../../../Vector/Icons";
import Marquee from "../../../Marquee/Marquee";

function Hero({ featuredItems }) {
	gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

	

	return (
		<>
			<Section
				classes='o-hero  -flex -align-start -justify-center'
				data-theme='light'
			>
				<div className='inner -relative'>
					<div className='o-hero_content'>
						<div className='bar-center'>
							<div className='inner -relative -stretchX -stretchY -flex -align-center -justify-between -row-reverse'>
								<div className='o-text'>
									<h3 className='role'>
										<div>Freelance</div>
										<div>Developer & Designer</div>
									</h3>
								</div>
								<div className='location'>
									<div className="location_text">Located in Montreal, Canada</div>
								</div>
							</div>
						</div>
					</div>
					<div className='o-hero_image'>
						<img src='https://res.cloudinary.com/dzoe0rah1/image/upload/v1647526928/me_b_and_w_5cecd7ce41.jpg'></img>
					</div>
					<Marquee text={'Matt Parisien'}/>
				</div>
			</Section>
		</>
	);
}

export default Hero;
