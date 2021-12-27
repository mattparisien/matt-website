import * as styles from "./styles/css/index.css";
import Home from "./components/pages/Home";
import { GlobalStyle } from "./styles/global";

function App() {
	return (
		<div className='App'>
			<main className='content-wrapper'>
				<GlobalStyle />
				<Home />
			</main>
		</div>
	);
}

export default App;
