"use strict";
import mongoose from "mongoose";

// const cats = [
//   {
//     id: "1",
//     name: "Frank",
//     birthdate: "2010-10-30",
//     weight: "5",
//     owner: "1",
//     filename: "http://placekitten.com/400/300",
//   },
//   {
//     id: "2",
//     name: "James",
//     birthdate: "2015-12-25",
//     weight: "11",
//     owner: "2",
//     filename: "http://placekitten.com/400/302",
//   },
// ];

// const getCat = (id) => {
//   return cats.find((cat) => cat.id === id);
// };

const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: { type: String, minlength: [2] },
  birthdate: { type: Date, max: [Date.now] },
  gender: { type: String, enum: { values: ["male", "female"] } },
  color: String,
  filename: String,
  weight: { type: Number, min: [0], max: [20] },
});

const Cat = mongoose.model("Cat", catSchema);

export default Cat;

