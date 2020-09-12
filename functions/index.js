const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// Add stripe secret key from .env
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("Helloooo"));

app.post("/payments/create", async (req, res) => {
	const total = req.query.total;

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, //subunits of currency
		currency: "usd",
	});
	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint:
// http://localhost:5001/fir-c12e4/us-central1/api
