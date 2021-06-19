const express = require("express");
const app = express();

function sayHello(req, res) {
  res.send("hello");
}
app.get("/", sayHello);
app.get("/mamad", (req, res) => {
  res.send(`${req.query.name}`);
});

app.listen(8080, (err) => {
  if (err) {
    console.log("Error baw");
    process.exit(1);
  }
});
