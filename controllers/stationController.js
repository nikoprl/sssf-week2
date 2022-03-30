"use strict";
import mongoose from "mongoose";
import Station from "../models/stationModel";
import Connection from "../models/connections";

const station_list_get = async (req, res) => {
  let amount = 10;
  if (Number.isInteger(parseInt(req.query.amount))) {
    amount = req.query.amount;
  }

  res.json(
    await Station.find()
      .limit(amount)
      .populate({
        path: "Connections",
        populate: [
          {
            path: "ConnectionTypeID",
            model: "ConnectionTypes",
          },
          {
            path: "LevelID",
            model: "Levels",
          },
        ],
      })
  );
};

const station_get = async (req, res) => {
  res.json(await Station.findById(req.params.id));
};

const station_post = async (req, res) => {
  console.log("station_post: ", req.body);
  try {
    const newStation = req.body;
    newStation._id = new mongoose.Types.ObjectId();
    for (let i = 0; i < newStation.Connections.length; i++) {
      newStation.Connections[i]._id = new mongoose.Types.ObjectId();
      await Connection.create(newStation.Connections[i]);
    }
    await Station.create(newStation);
    res.json(newStation);
  } catch (e) {
    console.error("Station create failed", e);
    res.json({ message: e.message });
  }
};

const station_edit = async (req, res) => {
  console.log("station_edit: ", req.body);
  try {
    const updateStation = req.body;
    await Station.updateOne(
      { _id: updateStation._id },
      { $set: updateStation }
    );
    res.json(updateStation);
  } catch (e) {
    console.error("Station edit failed", e);
    res.json({ message: e.message });
  }
};

const station_del = async (req, res) => {
  const stationToDelete = await Station.findById(req.params.id);
  try {
    await Station.deleteOne({ _id: stationToDelete._id });
    res.send("Station delete OK");
  } catch (e) {
    console.error("Station delete failed", e);
    res.json({ message: e.message });
  }
};

export {
  station_list_get,
  station_get,
  station_post,
  station_edit,
  station_del,
};
