// Require Models
const PQRequest = require("../models/pqrequest.model");

require("../mongo").connect();

function newRequest(req, res) {
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
  await request.save();
  res.send(request)
}

module.exports = {
  newRequest
  };
