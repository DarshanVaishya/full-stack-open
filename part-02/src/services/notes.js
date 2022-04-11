import axios from "axios";
const BASE_URL = "http://localhost:3001/notes";

const getAll = async () => {
	const response = await axios.get(BASE_URL);
	return response.data;
};
const create = async (newObject) => {
	const response = await axios.post(BASE_URL, newObject);
	return response.data;
};
const update = async (id, change) => {
	const response = await axios.patch(`${BASE_URL}/${id}`, change);
	return response.data;
};

export default {
	getAll,
	create,
	update,
};
