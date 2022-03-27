"use strict";
import "dotenv/config";
import express from "express";
import catRoute from "./routes/catRoute";
import userRoute from "./routes/userRoute";
import authRoute from "./routes/authRoute";
import passport from "./utils/pass";
import cors from "cors";
import db from "./utils/db";
const app = express();
const port = 3000;

app.use(cors());

app.use(passport.initialize());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// app.use("/");
app.use("/auth", authRoute);
app.use("/cat", passport.authenticate("jwt", { session: false }), catRoute);
app.use("/user", passport.authenticate("jwt", { session: false }), userRoute);

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

db.on("connected", () => {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
})
  .on("open", () => {
    console.log("Mongoose connection open to database");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });
