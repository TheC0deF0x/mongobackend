const express = require("express");
const router = express.Router();

// Models
const PQRequest = require("./models/pqrequest.model");
const BusinessArea = require("./models/businessArea.model");

router.post("/requests", (req, res) => {
  // Validate request
  if (!req.body.Title) {
    res.status(400).send({ message: "Content cannot be empty" });
  }

  // Create a request
  const request = new PQRequest({
    Title: req.body.Title,
    requestType: req.body.requestType,
    requestData: req.body.requestData,
    viewKey: req.body.viewKey,
    authKey: req.body.authKey,
    businessArea: req.body.businessArea,
    status: req.body.status,
    graduateApplication: req.body.graduateApplication,
    previousBusinessArea: req.body.previousBusinessArea,
  });

  request
    .save(request)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error occured" });
    });
});

router.get("/requests", (req, res) => {
  PQRequest.find().then((response) => {
    res.send(response);
  });
});

// Business Areas
router.get("/BusinessAreas", (req, res) => {
  BusinessArea.find().then((response) => {
    res.send(response);
  });
});

module.exports = router;
