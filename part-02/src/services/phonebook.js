import axios from "axios";
const BASE_URL = "http://www.localhost:3001/persons";

export async function getAll() {
	const response = await axios.get(BASE_URL);

	if (!response.data) alert("No data found!");

	return response.data;
}

export async function create(newPerson) {
	const response = await axios.post(BASE_URL, newPerson);
	return response.data;
}

export async function remove(id) {
	const response = await axios.delete(`${BASE_URL}/${id}`);
	return response.data;
}

export async function update(id, change) {
	const response = await axios.patch(`${BASE_URL}/${id}`, change);
	return response.data;
}
