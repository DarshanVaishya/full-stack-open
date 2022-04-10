import axios from "axios";
import React, { useEffect, useState } from "react";
import Content from "./Content";

function App() {
	const [countries, setCountries] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const [value, setValue] = useState("");

	useEffect(() => {
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((resp) => setCountries(resp.data));
	}, []);

	useEffect(() => {
		const data = countries.filter((country) =>
			country.name.common.toLowerCase().startsWith(value.toLowerCase())
		);
		setFiltered(data);
	}, [value, countries]);

	if (countries.length === 0) return <h2>Loading...</h2>;

	return (
		<div>
			<label>
				Find countries
				<input
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</label>

			<Content data={filtered} />
		</div>
	);
}

export default App;
