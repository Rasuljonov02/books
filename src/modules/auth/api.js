import axios from "axios";


axios.defaults.headers.common["Key"] = "Meason";

export const registerUser = async (userData) => {
	try {
		const response = await axios.post("https://no23.lavina.tech/signup", userData);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const getUserInfo = async () => {
	try {
		const headers = {
			Sign: "0689046ed5ebf423783127cdd8f21245",
		};

		const response = await axios.get("https://no23.lavina.tech/myself", { headers });
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};


export const createBooks = async (data) => {
	try {
		const headers = {
			Sign: "fb60abebd726a9f72de1082cab2cb599",
			"Content-Type": "application/json",
		};

		const response = await axios.post("https://no23.lavina.tech/books", data, { headers });
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const getAllBooks = async () => {
	try {
		const headers = {
			Sign: "820c469cc30cc0d0b9cc150293a608be",
		};

		const response = await axios.get("https://no23.lavina.tech/books", { headers });
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};


export const deleteBook = async (id) => {
	try {
		const headers = {
			Sign: "3ad12e39363e44f57fb74b6970e2548a",
		};

		const response = await axios.delete(`https://no23.lavina.tech/books/${id}`, { headers });
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};


export const updateBook = async (id, status) => {
	try {
		const headers = {
			Sign: "86ad98e721cd71865143d80091c69f3a",
			"Content-Type": "application/json",
		};

		const response = await axios.patch(`https://no23.lavina.tech/books/${id}`, status, { headers });
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const search = async (title) => {
	try {
		const headers = {
			Sign: "820c469cc30cc0d0b9cc150293a608be",
		};

		const response = await axios.get(`https://no23.lavina.tech/books/${title}`, { headers });
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
