// Iteration #1
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  propellers: {
    type: Number,
    require: true,
  },
  maxSpeed: {
    type: Number,
    require: true,
  },
});

const Drones = mongoose.model("Drones", droneSchema);

module.exports = Drones;
