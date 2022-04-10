import React, { useEffect, useState } from "react";
import Country from "./Country";
import Weather from "./Weather";

function Content({ data }) {
	const [show, setShow] = useState(null);

	useEffect(() => {
		setShow(null);
	}, [data]);

	if (data.length === 250) return <p>Enter a filter</p>;
	if (data.length === 0) return <p>No country found</p>;

	if (data.length === 1) {
		const country = Object.values(data)[0];
		return (
			<div>
				<Country country={country} />
				<Weather country={country} />
			</div>
		);
	}

	if (data.length <= 10) {
		return (
			<div>
				{data.map((country) => (
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							maxWidth: "500px",
						}}
					>
						<span key={country.name.common}>{country.name.common}</span>
						<button onClick={() => setShow(country)} key={country.area}>
							Show
						</button>
					</div>
				))}

				<div>
					{show ? (
						<Country country={show} />
					) : (
						<h3>Click show to view its data</h3>
					)}
				</div>
			</div>
		);
	}

	return <p>Too many matches. Please be more specefic</p>;
}

export default Content;
