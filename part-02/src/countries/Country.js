import React from "react";

function Country({ country }) {
	return (
		<>
			<h2>{country.name.common}</h2>
			<p>Official name: {country.name.official}</p>
			<p>Capital(s): {country.capital.join(", ")}</p>
			<p>Area: {country.area}</p>

			<h4>Languaes</h4>
			<ul>
				{Object.values(country.languages).map((language) => (
					<li key={language}>{language}</li>
				))}
			</ul>

			<img
				style={{
					boxShadow: "0 0 20px 10px rgba(0, 0, 0, 0.2)",
					margin: "20px",
				}}
				src={country.flags.png}
				alt={`Flag of ${country.name.common}`}
			/>
		</>
	);
}

export default Country;
