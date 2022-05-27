const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PQRequestSchema = new Schema(
  {
    Title: String,
    requestType: String,
    requestData: Schema.Types.Mixed,
    viewKey: String,
    authKey: String,
    businessArea: String,
    status: String,
    graduateApplication: String,
    previousBusinessArea: String,
  },
  { collection: "PQRequests" }
);

const PQRequest = mongoose.model("PQRequest", PQRequestSchema);

module.exports = PQRequest;
