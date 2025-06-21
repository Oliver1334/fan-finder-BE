const mongoose = require("mongoose");
const ENV = process.env.NODE_ENV || "development";

console.log(process.env.NODE_ENV + "<<<< process thingy");
console.log(ENV + "<<< ENV");

// Only load .env files in local development
if (ENV !== "production") {
  require("dotenv").config({ path: `${__dirname}/../.env.${ENV}` });
}

// Use whichever env variable is defined
const connectionURL = process.env.PROD_DB || process.env.DEVELOPMENT_DB;

if (!connectionURL) {
  throw new Error("Missing MongoDB connection string in environment variables!");
}

mongoose.connect(connectionURL)
  .then(() => {
    console.log("connection successful");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

module.exports = mongoose;
