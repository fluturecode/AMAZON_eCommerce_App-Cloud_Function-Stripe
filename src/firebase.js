import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyC89VTi8ONb0XN2R-lnwLzzwkNDypJ8Gig",
	authDomain: "clone-275e1.firebaseapp.com",
	databaseURL: "https://clone-275e1.firebaseio.com",
	projectId: "clone-275e1",
	storageBucket: "clone-275e1.appspot.com",
	messagingSenderId: "1048166373592",
	appId: "1:1048166373592:web:c13e401b52e505b83f5fad",
	measurementId: "G-GTRJD251EN",
};

// initialize app

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
