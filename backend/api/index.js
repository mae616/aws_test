const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "HelloWorld" });
});

app.use("/member", require("./member"));

app.listen(4000, () => {
  console.log("server start...");
});
