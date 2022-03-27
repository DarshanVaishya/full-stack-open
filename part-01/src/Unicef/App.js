import { useState } from "react";
import { Statistics } from "./Statistics";

function Button({ onClick, text }) {
	return <button onClick={onClick}>{text}</button>;
}

function Unicef() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<>
			<div>
				<h1>Give feedback</h1>
				<Button onClick={() => setGood(good + 1)} text="Good" />
				<Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
				<Button onClick={() => setBad(bad + 1)} text="Bad" />
			</div>
			<br />

			<Statistics good={good} neutral={neutral} bad={bad} />
		</>
	);
}

export default Unicef;
