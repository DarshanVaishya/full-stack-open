import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

const CustomButton = ({ onClick, text }) => (
	<button onClick={onClick}>{text}</button>
);

const App = () => {
	const [counter, setCounter] = useState(0);

	const increment = () => setCounter(counter + 1);
	const decrement = () => setCounter(counter - 1);
	const setToZero = () => setCounter(0);

	return (
		<div>
			<Display counter={counter} />
			<CustomButton onClick={decrement} text="minus" />
			<CustomButton onClick={setToZero} text="zero" />
			<CustomButton onClick={increment} text="plus" />
		</div>
	);
};

export default App;
