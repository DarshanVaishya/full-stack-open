import { StatisticLine } from "./StatisticLine";

export function Statistics({ good, neutral, bad }) {
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
