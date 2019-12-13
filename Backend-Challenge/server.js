const bodyParser = require("body-parser");
const express = require("express");
const routes = require("./routes/routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/numbers", (req, res) => {
  routes.getNumbers(req, res);
});
var server = app.listen(4000, () => {
  console.log("Server running on port:", server.address().port);
});
