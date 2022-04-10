import React from "react";

function CountryRow({ country, setShow }) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				maxWidth: "500px",
			}}
		>
			<span>{country.name.common}</span>
			<button onClick={() => setShow(country)}>Show</button>
		</div>
	);
}

export default CountryRow;
