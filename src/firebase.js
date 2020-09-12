import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDzGXoi0QfducvrQLg0ApelAYeRC8uFrb4",
	authDomain: "fir-c12e4.firebaseapp.com",
	databaseURL: "https://fir-c12e4.firebaseio.com",
	projectId: "fir-c12e4",
	storageBucket: "fir-c12e4.appspot.com",
	messagingSenderId: "730768055954",
	appId: "1:730768055954:web:12943cc62df34d8626504b",
	measurementId: "G-1H0SYT7HXJ",
};

// initialize app

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
