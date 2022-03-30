function PersonForm({
	handleSubmit,
	newName,
	newNumber,
	setNewName,
	setNewNumber,
}) {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				name:
				<input
					type="text"
					value={newName}
					onChange={(e) => setNewName(e.target.value)}
					required
				/>
			</div>
			<div>
				number:
				<input
					type="text"
					value={newNumber}
					onChange={(e) => setNewNumber(e.target.value)}
					required
				/>
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
}

export default PersonForm;
