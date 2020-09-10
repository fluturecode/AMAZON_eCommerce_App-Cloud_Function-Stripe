import axios from "axios";

const instance = axios.create({
	// THE API (cloud function) URL
	baseURL: "https://clone-275e1.firebaseio.com",
	// "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;
