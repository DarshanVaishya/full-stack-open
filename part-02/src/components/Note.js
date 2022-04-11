const Note = ({ note, toggleImportance }) => {
	const label = note.important ? "make not important" : "make important";

	return (
		<li
			style={{
				display: "flex",
				justifyContent: "space-between",
				maxWidth: "800px",
			}}
		>
			{note.content}
			<button onClick={toggleImportance}>{label}</button>
		</li>
	);
};

export default Note;
