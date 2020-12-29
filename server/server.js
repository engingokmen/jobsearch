console.log("serverrrrrrr fileeeee");
const express = require("express");
console.log("serverrrrrrr fileeeee 1");
const path = require("path");
console.log("serverrrrrrr fileeeee 2");
// const history = require("connect-history-api-fallback");
console.log("serverrrrrrr fileeeee 3");
const jobList = require("./jobList.json");
console.log("serverrrrrrr fileeeee 4");
const jobDetails = require("./jobDetails.json");
console.log("serverrrrrrr fileeeee 5");

const app = express();

const staticFileMiddleware = express.static(path.join(__dirname, "../dist"));

app.get("/api/joblist", function(req, res) {
  res.status(jobList.statusCode);
  res.json(jobList.result);
});

app.get("/api/jobdetail/:id", function(req, res) {
  switch (req.params.id) {
    case "1":
      res.status(jobDetails[req.params.id - 1].statusCode);
      res.json(jobDetails[req.params.id - 1].result);
      break;
    case "2":
      res.status(jobDetails[req.params.id - 1].statusCode);
      res.json(jobDetails[req.params.id - 1].result);
      break;
    case "3":
      res.status(jobDetails[req.params.id - 1].statusCode);
      res.json(jobDetails[req.params.id - 1].result);
      break;
    case "4":
      res.status(jobDetails[req.params.id - 1].statusCode);
      res.json(jobDetails[req.params.id - 1].result);
      break;
    case "5":
      res.status(jobDetails[req.params.id - 1].statusCode);
      res.json(jobDetails[req.params.id - 1].result);
      break;
  }
});

// app.use(history());
app.use(staticFileMiddleware);

const port = 8000;

app.listen(port, function() {
  console.log("App now running on port", port);
});
