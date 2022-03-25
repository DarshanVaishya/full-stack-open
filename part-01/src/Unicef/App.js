import { useState } from "react";

function StatisticLine({ text, value }) {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
}

function Statistics({ good, neutral, bad }) {
	const all = good + neutral + bad;
	const average = ((good * 1 + bad * -1) / all).toFixed(2);
	const positive = (all ? (good * 100) / all : 0).toFixed(2);

	if (!all) return <div>No feedback given</div>;

	return (
		<table>
			<tbody>
				<StatisticLine text="good" value={good} />
				<StatisticLine text="neutral" value={neutral} />
				<StatisticLine text="bad" value={bad} />

				<StatisticLine text="all" value={all} />
				<StatisticLine text="average" value={average} />
				<StatisticLine text="positive" value={positive} />
			</tbody>
		</table>
	);
}

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
