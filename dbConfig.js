const mongoose = require("mongoose");
const { db_URL } = require("./constant.js");

const connectdb = async () => {
  try {
    await mongoose.connect(db_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = { connectdb };
