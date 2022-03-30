"use strict";
import "dotenv/config";
import express from "express";
import stationRoute from "./routes/stationRoute";
import userRoute from "./routes/userRoute";
import authRoute from "./routes/authRoute";
import passport from "./utils/pass";
import cors from "cors";
import db from "./utils/db";
const app = express();
const port = 3000;
app.use(express.json()); // for parsing application/json
app.use(cors());

app.use(passport.initialize());


app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/', (req, res) => {
	res.send('chargemap');
});
app.use("/user", userRoute); //, passport.authenticate("jwt", { session: false })
app.use('/station', stationRoute); //passport.authenticate('jwt', {session: false}),
app.use('/auth', authRoute);

db.on('connected', () => {
	app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}).on('error', (err) => {
	console.log(`Connection error: ${err.message}`);
});