import axios from "axios";
const BASE_URL = "http://www.localhost:3001/persons";

async function getAll() {
	const response = await axios.get(BASE_URL);
	return response.data;
}

async function create(newPerson) {
	const response = await axios.post(BASE_URL, newPerson);
	return response.data;
}

async function remove(id) {
	const response = await axios.delete(`${BASE_URL}/${id}`);
	return response.data;
}

export default {
	getAll,
	create,
	remove,
};
