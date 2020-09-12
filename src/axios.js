import axios from "axios";

const instance = axios.create({
	// THE API (cloud function) URL
	baseURL: "https://localhost:5001/fir-c12e4/us-central1/api",
});

export default instance;
