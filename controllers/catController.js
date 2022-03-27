"use strict";
import Cat from "../models/catModel";

const cat_list_get = async (req, res) => {
  console.log("req query: ", req.query);
  res.json(await Cat.find(req.query).setOptions({ sanitizeFilter: true }));
};

const cat_get = async (req, res) => {
  console.log(req.params);
  res.json(await Cat.findById(req.params.id));
};

const cat_post = async (req, res) => {
  console.log("Cat body: ", req.body);
  console.log("Cat file: ", req.file);
  const newCat = req.body;
  newCat.filename = req.file.filename;
  try {
    await Cat.create(newCat);
    res.json(newCat);
  } catch (e) {
    console.error("cat controller create failed", e);
    res.json({ message: e.message });
  }
};

const cat_update = async (req, res) => {
  const catToUpdate = await Cat.findById(req.params.id);
  try {
    const updatedCat = req.body;
    await Cat.updateOne({ _id: catToUpdate._id }, { $set: updatedCat });
    res.json(updatedCat);
  } catch (e) {
    console.error("cat controller update failed", e);
    res.json({ message: e.message });
  }
};

const cat_delete = async (req, res) => {
  const catToDel = await Cat.findById(req.params.id);
  try {
    await Cat.deleteOne(catToDel._id);
    res.send("Cat delete OK");
    console.log("Cat deleted: ", req.params.id);
  } catch (e) {
    console.error("cat controller delete failed", e);
    res.json({ message: e.message });
  }
};

export { cat_list_get, cat_get, cat_post, cat_update, cat_delete };
