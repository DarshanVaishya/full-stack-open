import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Person from "../components/Person";
import PersonForm from "../components/PersonForm";
import * as phonebookService from "../services/phonebook";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [search, setSearch] = useState("");

	useEffect(() => {
		phonebookService.getAll().then((initialPersons) => {
			setPersons(initialPersons);
		});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		const person = persons.find(
			(person) => person.name.toLowerCase() === newName.toLocaleLowerCase()
		);

		if (person) {
			const text = `${person.name} is already added to phonebook, replace the old number with a new one?`;
			if (!window.confirm(text)) return;

			phonebookService
				.update(person.id, { number: newNumber })
				.then((changedPerson) =>
					setPersons(
						persons.map((current) =>
							current.id !== person.id ? current : changedPerson
						)
					)
				);
		} else {
			const newPerson = {
				name: newName,
				number: newNumber,
			};

			phonebookService.create(newPerson).then((newPerson) => {
				setPersons(persons.concat(newPerson));
			});
		}
		setNewName("");
		setNewNumber("");
	};

	const handleSearch = (e) => {
		setSearch(e.target.value.toLowerCase());
	};

	const handleDelete = (id) => {
		const person = persons.find((person) => person.id === id);
		if (!window.confirm(`Delete ${person.name}'s number?`)) return;

		phonebookService.remove(id);
		setPersons(persons.filter((person) => person.id !== id));
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
			{toShow.map((person) => (
				<Person
					key={person.id}
					person={person}
					handleDelete={() => handleDelete(person.id)}
				/>
			))}
		</div>
	);
};

export default App;
