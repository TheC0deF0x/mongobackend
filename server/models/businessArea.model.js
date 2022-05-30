const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessAreaSchema = new Schema(
  {
    Title: String,
    selfApprova: Boolean,
    requireDOB: Boolean,
    graduateProgramme: Boolean,
    contact: String,
    subdivisions: Schema.Types.Mixed,
  },
  { collection: "BusinessAreas", timestamps: true }
);

const BusinessArea = mongoose.model("BusinessArea", businessAreaSchema);

module.exports = BusinessArea;
