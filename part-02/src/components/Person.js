import React from "react";

function Person({ person, handleDelete }) {
	return (
		<li
			key={person.id}
			style={{
				display: "flex",
				justifyContent: "space-between",
				maxWidth: "800px",
			}}
		>
			<span>
				{person.name} {person.number}
			</span>
			<button onClick={handleDelete}>Delete</button>
		</li>
	);
}

export default Person;
