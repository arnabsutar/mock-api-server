const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.use("/locales", express.static("locales"));
app.listen(8080);
console.log("----started");
