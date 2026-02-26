const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/users_router");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

app.use((req, res, next) => {
  res.status(500).json({
    message: "Something is broke",
  });
});

module.exports = app;
