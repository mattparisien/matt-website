import styled from "styled-components";
import { useRef } from "react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import InView from "react-intersection-observer";

const StyledPill = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	
	text-transform: uppercase;

	${({ theme }) => theme.spacing(-0.4, ["padding-top"])};
	${({ theme }) => theme.spacing(-0.4, ["padding-bottom"])};
	${({ theme }) => theme.spacing(1, ["padding-left"])};
	${({ theme }) => theme.spacing(1, ["padding-right"])};
	margin: 0.4rem;
	${({ theme }) => theme.typography.setSize(2)};
	height: 50px;

	color: ${({ theme, highlighted }) =>
		highlighted ? theme.colors.light : theme.colors.dark};
	background-color ${({ theme, highlighted }) =>
		highlighted ? theme.colors.dark : theme.colors.light};
	border-radius: 50px;
	border: 2px solid ${({ theme, highlighted }) => theme.colors.dark};

	transform: translateY(125%);
`;

const StyledPillGroup = styled.div`

	height: 100;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	${({ theme }) => theme.spacing(4, "margin-bottom")};
	${({ theme }) => theme.spacing(4, "margin-top")};
`;

function Pill({ children, addToRefs, highlighted}) {
	return (
		<div className='pill-wrapper' style={{ overflow: "hidden" }} >
			<StyledPill className='Pill' ref={addToRefs} highlighted={highlighted}>
				{children}
			</StyledPill>
		</div>
	);
}

export function Pills({ info }) {
	const [intersecting, setIntersecting] = useState(false);

	const pillRefs = useRef([]);
	pillRefs.current = [];

	const addToRefs = el => {
		if (el && !pillRefs.current.includes(el)) {
			pillRefs.current.push(el);
		}
	};

	useEffect(() => {
		if (pillRefs.current && intersecting) {
			gsap.to(pillRefs.current, {
				y: 0,
				duration: 3,
				stagger: 0.06,
				ease: "expo.inOut",
			});
		}
	}, [pillRefs, intersecting]);

	return (
		<InView
			onChange={(inView, entry) => inView && setIntersecting(true)}
			className='pill-view-wrapper'
		>
			<StyledPillGroup className='Pills'>
				{info.map((pill, i) => {
					return (
						<Pill addToRefs={addToRefs} key={i} highlighted={pill.highlighted} scrollSpeed={i}>
							{pill.text}
						</Pill>
					);
				})}
			</StyledPillGroup>
		</InView>
	);
}
