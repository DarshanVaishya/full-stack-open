const Header = ({ course }) => <h2>{course}</h2>;
const Total = ({ sum }) => <b>Number of exercises {sum}</b>;
const Part = ({ part }) => (
	<p>
		{part.name} {part.exercises}
	</p>
);

const Content = ({ parts }) => (
	<>
		{parts.map((part) => (
			<Part part={part} key={part.id} />
		))}
	</>
);

export function Course({ course }) {
	const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
	return (
		<>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total sum={total} />
		</>
	);
}
