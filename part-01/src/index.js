import ReactDOM from "react-dom";
import Ex1_1 from "./Ex1.1/App";
import Ex1_2 from "./Ex1.2/App";
import Ex1_3 from "./Ex1.3/App";
import Ex1_4 from "./Ex1.4/App";
import Ex1_5 from "./Ex1.5/App";

function App() {
	return (
		<>
			<h1>Exercise 1.1</h1>
			<Ex1_1 />
			<br />

			<h1>Exercise 1.2</h1>
			<Ex1_2 />
			<br />

			<h1>Exercise 1.3</h1>
			<Ex1_3 />
			<br />

			<h1>Exercise 1.4</h1>
			<Ex1_4 />
			<br />

			<h1>Exercise 1.5</h1>
			<Ex1_5 />
			<br />
		</>
	);
}

ReactDOM.render(<App />, document.querySelector("#root"));
