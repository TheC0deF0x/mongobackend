const mongoose = require("mongoose");
/**
 * Set to Node.js native promises
 * Per https://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;
const mongoUri = "mongodb://127.0.0.1/PQ";

function connect() {
  mongoose.set("debug", true);
  return mongoose
    .connect(mongoUri)
    .then(() => console.log("Mongoose has connected successfully."))
    .catch((e) => console.log(e));
}

module.exports = {
  connect,
  mongoose,
};
