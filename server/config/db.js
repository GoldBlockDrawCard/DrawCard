const mongoose = require("mongoose");
const mongoDB_Url = process.env.MONGO_URI;

// Node의 native Promise 사용
mongoose.Promise = global.Promise;

mongoose
  .connect(mongoDB_Url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));
