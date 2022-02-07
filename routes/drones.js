const express = require("express");
const { redirect } = require("express/lib/response");
const router = express.Router();
const Drones = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drones.find()
    .then((allDrones) => {
      console.log("Found drone objs!", allDrones);
      res.render("drones/list", {
        droneList: allDrones,
      });
    })
    .catch((err) => {
      console.log("There was an error", err);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  // console.log("This is the body", req.body);
  Drones.create({
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  })
    .then((results) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("There was an error", err);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drones.findById(req.params.id)
    .then((foundDrone) => {
      res.render("drones/update-form", {
        name: foundDrone.name,
        propellers: foundDrone.propellers,
        maxSpeed: foundDrone.maxSpeed,
        _id: foundDrone._id,
      });
    })
    .catch((err) => {
      console.log("There was an issue", err);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drones.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
    _id: req.body._id,
  })
    .then((results) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("There was an error", err);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drones.findByIdAndRemove(req.params.id)
    .then((result) => {
      console.log("Drone no more", result);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

module.exports = router;
