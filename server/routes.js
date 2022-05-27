const express = require("express");
const router = express.Router();

// Models
const PQRequest = require("./models/pqrequest.model");

router.post("/requests", async (req, res) => {
  console.log("trying to post");
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

router.get("/requests", async (req, res) => {
  const requests = await PQRequest.find();
  res.send(requests);
});

module.exports = router;
