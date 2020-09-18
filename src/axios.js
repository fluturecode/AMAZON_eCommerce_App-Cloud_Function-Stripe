import axios from "axios";

const instance = axios.create({
	// THE API (cloud function) URL
	baseURL: "https://fir-c12e4.firebaseio.com",
});

export default instance;
