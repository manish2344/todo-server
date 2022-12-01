
const mongoose = require("mongoose");
const db = process.env.MONGO_URL;
const database = async () => {
  try {
    await mongoose.connect(db,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
    );
    console.log("database connected");
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = database;
