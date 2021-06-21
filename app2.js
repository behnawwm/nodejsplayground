const express = require("express");
const app = express();

app.get("/add", (req, res) => {
    let x = req.query.x;
    let y = req.query.y;
    res.send(`${req.query.x} + ${req.query.y} = ${parseInt(x)+parseInt(y)} `);
});
app.get("/sub", (req, res) => {
    let x = req.query.x;
    let y = req.query.y;
    res.send(`${req.query.x} - ${req.query.y} = ${parseInt(x)-parseInt(y)} `);
});
app.get("/mul", (req, res) => {
    let x = req.query.x;
    let y = req.query.y;
    res.send(`${req.query.x} * ${req.query.y} = ${parseInt(x)*parseInt(y)} `);
});
app.get("/div", (req, res) => {
    let x = req.query.x;
    let y = req.query.y;
    res.send(`${req.query.x} / ${req.query.y} = ${parseInt(x)/parseInt(y)} `);
});

app.listen(8080, (err) => {
  if (err) {
    console.log("Error baw");
    process.exit(1);
  }
});
