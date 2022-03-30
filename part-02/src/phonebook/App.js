import { useState } from "react";
import Filter from "../components/Filter";
import PersonForm from "../components/PersonForm";
import Persons from "../components/Persons";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [search, setSearch] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const alreadyExists = persons.some(
			(person) => person.name.toLowerCase() === newName.toLocaleLowerCase()
		);
		if (alreadyExists) {
			return alert(`${newName} is already added to phonebook`);
		}

		setPersons(
			persons.concat({
				name: newName,
				number: newNumber,
				id: persons.length + 1,
			})
		);
		setNewName("");
		setNewNumber("");
	};

	const handleSearch = (e) => {
		setSearch(e.target.value.toLowerCase());
	};

	const toShow =
		search === ""
			? persons
			: persons.filter((person) => person.name.toLowerCase().includes(search));

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter search={search} handleSearch={handleSearch} />

			<h3>Add a new contact</h3>
			<PersonForm
				handleSubmit={handleSubmit}
				newName={newName}
				newNumber={newNumber}
				setNewName={setNewName}
				setNewNumber={setNewNumber}
			/>

			<h3>Numbers</h3>
			<Persons persons={toShow} />
		</div>
	);
};

export default App;
