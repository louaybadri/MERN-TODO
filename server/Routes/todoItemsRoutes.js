const express = require("express");
const router = express.Router();

const todoItemsModel = require("../models/todoItemModel");
// add item
router.post("/api/item", async (req, res) => {
  try {
    const newItem = new todoItemsModel();
    newItem["item"] = req.body.item;

    console.log("\n\nwe reached the save\n\n");

    const saveItem = await newItem.save();
    res.status(200).json("item added successfully");
  } catch (error) {
    res.json(error);
  }
});

//get items
router.get("/api/item", async (req, res) => {
  try {
    const allItems = await todoItemsModel.find({});
    res.status(200).json(allItems);
  } catch (error) {
    res.json(error);
  }
});
//update
router.put("/api/item/:id", async (req, res) => {
  try {
    const getItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    console.log(req.body);
    res.status(200).json("updated");
  } catch (error) {
    res.json(error);
  }
});
//delete
router.delete("/api/item/:id", async (req, res) => {
  try {
    const getItem = await todoItemsModel.findByIdAndRemove(req.params.id, {
      $set: req.body,
    });
    console.log(req.body);
    res.status(200).json("Removed");
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
