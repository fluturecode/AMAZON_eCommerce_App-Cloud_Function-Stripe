import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyButl1u2CFN8QqZQkHyqvTs-HMAV0CQDUE",
	authDomain: "fir-257f9.firebaseapp.com",
	databaseURL: "https://fir-257f9.firebaseio.com",
	projectId: "fir-257f9",
	storageBucket: "fir-257f9.appspot.com",
	messagingSenderId: "686784755753",
	appId: "1:686784755753:web:f254f2d79cfe03fc2a8438",
	measurementId: "G-NWZPH5XX68",
};

// initialize app

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
