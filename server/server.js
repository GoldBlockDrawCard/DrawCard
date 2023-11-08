require("dotenv").config();

const express = require("express");
const cors = require("cors");
// const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

const port = process.env.PORT || 3000;

// Static File Service
app.use(express.static("public"));
// 동일한 호스트가 아니어도 통신할 수 있도록 설정
app.use(cors());
// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CONNECT TO MONGODB SERVER
require("./config/db");

// ROUTERS
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server listening on port localhost:${port}`);
});
