import * as styles from "./styles/css/index.css";
import Home from "./components/pages/Home";
import { GlobalStyle } from "./styles/global";
import EntryScreen from "./components/EntryScreen";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function App() {
	const [state, setState] = useState({
		entryScreenActive: true,
	});

	return (
		<div className='App'>
			<EntryScreen isActive={state.entryScreenActive} setState={setState} />
			<main className='content-wrapper'>
				<GlobalStyle />
				<Home />
			</main>
		</div>
	);
}

export default App;
