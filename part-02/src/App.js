import { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from "./services/notes";
import Notification from "./components/Notification";
import Footer from "./components/Footer";

const App = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState("");
	const [showAll, setShowAll] = useState(true);
	const [message, setMessage] = useState(null);

	useEffect(() => {
		noteService.getAll().then((initialNotes) => setNotes(initialNotes));
	}, []);

	const handleNoteChange = (e) => setNewNote(e.target.value);

	const toggleImportanceOf = (id) => {
		const note = notes.find((note) => note.id === id);

		// PATCH method (update given values)
		noteService
			.update(id, { important: !note.important })
			.then((returnedNote) =>
				setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
			)
			.catch(() => {
				setErrorMessage(
					`Note '${note.content}' was already removed from from server`
				);
				setTimeout(() => setErrorMessage(null), 5000);
			});
	};

	const addNote = (e) => {
		e.preventDefault();

		// Create the new note object
		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
		};

		// Send object to the server
		noteService.create(noteObject).then((returnedNote) => {
			setNotes(notes.concat(returnedNote));
			setNewNote("");
		});
	};

	const notesToShow = showAll ? notes : notes.filter((note) => note.important);

	return (
		<div>
			<h1>Notes</h1>
			<Notification message={message} />
			<div>
				<button onClick={() => setShowAll(!showAll)}>
					Show {showAll ? "important" : "all"}
				</button>
			</div>

			<ul>
				{notesToShow.map((note) => (
					<Note
						key={note.id}
						note={note}
						toggleImportance={() => toggleImportanceOf(note.id)}
					/>
				))}
			</ul>

			<form onSubmit={addNote}>
				<input value={newNote} onChange={handleNoteChange} />
				<button type="submit">Save</button>
			</form>

			<Footer />
		</div>
	);
};

export default App;
