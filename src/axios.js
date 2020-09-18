import axios from "axios";

const instance = axios.create({
	// THE API (cloud function) URL
	baseURL: "https://us-central1-fir-c12e4.cloudfunctions.net/api",
});

export default instance;
