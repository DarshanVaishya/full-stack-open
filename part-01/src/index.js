import ReactDOM from "react-dom";
import Ex1_1 from "./Ex1.1/App";
import Ex1_2 from "./Ex1.2/App";

function App() {
	return (
		<>
			<h1>Exercise 1.1</h1>
			<Ex1_1 />
			<br />

			<h1>Exercise 1.2</h1>
			<Ex1_2 />
		</>
	);
}

ReactDOM.render(<App />, document.querySelector("#root"));
