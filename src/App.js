import * as styles from "./styles/css/index.css";
import Home from "./components/pages/Home";
import CursorFollower from "./components/CursorFollower";
import { GlobalStyle } from "./styles/global";
import EntryScreen from "./components/EntryScreen";
import { useState, useRef, useEffect } from "react";
import $ from "jquery";
import Button from "./components/Button/Button";
import Pencil from "./components/Vector/Pencil";
import Close from "./components/Vector/Close";
import Modal from "./components/Modals/Modal";

function App() {
	const [state, setState] = useState({
		entryScreenActive: true,
		modal: {
			isActive: false,
			hasBeenActive: false,
		},
	});

	const scrollContainer = useRef(null);

	const cursor = useRef(null);

	// useEffect(() => {
	// 	const scroll = new locomotiveScroll({
	// 		el: scrollContainer.current,
	// 		smooth: true
	// 	})
	// }, [scrollContainer])

	const toggleModalVisibility = () => {
		setState(prev => ({
			...prev,
			modal: {
				isActive: !state.modal.isActive,
				hasBeenActive: true
			},
		}));
	};

	return (
		<div className='App' ref={scrollContainer}>
			<Modal
				isActive={state.modal.isActive}
				hasBeenActive={state.modal.hasBeenActive}
				hideModal={toggleModalVisibility}
			/>
			{/* <EntryScreen isActive={state.entryScreenActive} setState={setState} /> */}
			<main className='content-wrapper'>
				<GlobalStyle scrollDisabled={state.entryScreenActive} />
				<Home />
			</main>
			<CursorFollower ref={cursor} />
			<Button
				style={"circle"}
				id={"contactCta"}
				onClick={toggleModalVisibility}
				bg={state.modal.isActive ? "Pink" : "Light"}
			>
				{state.modal.isActive ? (
					<Close classes={"contactCta__close"} />
				) : (
					<Pencil classes={"contactCta__pencil"} />
				)}
			</Button>
		</div>
	);
}

export default App;
