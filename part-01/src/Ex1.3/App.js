import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Ex1_3 = () => {
	const course = "Half Stack application development";
	const part1 = {
		name: "Fundamentals of React",
		exercises: 10,
	};
	const part2 = {
		name: "Using props to pass data",
		exercises: 7,
	};
	const part3 = {
		name: "State of a component",
		exercises: 14,
	};

	return (
		<div>
			<Header course={course} />
			<Content part1={part1} part2={part2} part3={part3} />
			<Total amount={part1.exercises + part2.exercises + part3.exercises} />
		</div>
	);
};

export default Ex1_3;