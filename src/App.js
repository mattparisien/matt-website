import * as styles from "./styles/css/index.css";
import Home from "./components/pages/Home";
import CursorFollower from "./components/CursorFollower";
import { GlobalStyle } from "./styles/global";
import EntryScreen from "./components/EntryScreen";
import { useState, useRef, useEffect } from "react";
import $ from "jquery";

function App() {
	const [state, setState] = useState({
		entryScreenActive: true,
	});

	const cursor = useRef(null);

	useEffect(() => {
		console.log("cursor", cursor);

		const handleMouseMove = e => {
			$(cursor.current).css({
				left: e.clientX,
				top: e.clientY,
			});
		};

		if (cursor.current) {
			$(window).on("mousemove", (e) => {
				handleMouseMove(e);
			});
		}

		return () => {
			window.removeEventListener("mousemove", handleMouseMove)
		};
	}, [cursor]);

	return (
		<div className='App'>
			<EntryScreen isActive={state.entryScreenActive} setState={setState} />
			<main className='content-wrapper'>
				<GlobalStyle />
				<Home />
			</main>
			<CursorFollower ref={cursor} />
		</div>
	);
}

export default App;
