import { useState } from "react";

function getRandomInt(min, max) {
	return Math.floor(min + Math.random() * (max - min));
}

function AnecdoteItem({ text, votes }) {
	return (
		<>
			<p>{text}</p>
			<p>has {votes} votes</p>
		</>
	);
}

function Anecdotes() {
	const anecdotes = [
		"If it hurts, do it more often",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
	];

	const [selected, setSelected] = useState(0);
	const [vote, setVote] = useState(() => new Array(anecdotes.length).fill(0));
	const AddVote = () => {
		const copy = vote.slice();
		copy[selected]++;
		setVote(copy);
	};

	let num = getRandomInt(0, anecdotes.length);
	const max = vote.indexOf(Math.max(...vote));

	return (
		<>
			<div>
				<h1>Anecdote of the day</h1>
				<AnecdoteItem text={anecdotes[selected]} votes={vote[selected]} />
				<button onClick={AddVote}>vote</button>
				<button onClick={() => setSelected(num)}>Next anecdotes</button>
			</div>

			<div>
				<h1>Anecdote with most votes</h1>
				<AnecdoteItem text={anecdotes[max]} votes={vote[max]} />
			</div>
		</>
	);
}

export default Anecdotes;
