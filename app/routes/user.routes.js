const authJwt = require("../middleware/authJwt");
const controller = require("../controllers/user.controller");
const app = require('express').Router();

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.get("/api/test/all", controller.allAccess);

app.get(
  "/api/test/user",
  authJwt,
  controller.userBoard
);

module.exports = app;