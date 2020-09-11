import axios from "axios";

const instance = axios.create({
	// THE API (cloud function) URL
	baseURL: " https://fir-257f9.web.app",
});

export default instance;
