const mongoose = require("mongoose");
/**
 * Set to Node.js native promises
 * Per https://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

// const env = require("./environment/environment");

// eslint-disable-next-line max-len
// const mongoUri = `mongodb://${env.accountName}:${env.key}@${env.accountName}.documents.azure.com:${env.port}/${env.databaseName}?ssl=true`;

const mongoUri = "mongodb://127.0.0.1/requests";

function connect() {
  mongoose.set("debug", true);
  return mongoose
    .connect(mongoUri)
    .then(() => console.log("connected"))
    .catch((e) => console.log(e));
}

module.exports = {
  connect,
  mongoose,
};
