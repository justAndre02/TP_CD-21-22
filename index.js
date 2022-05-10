const express = require("express");
const simulationRouter = require("./routes/simulation");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views","./views");
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"));

app.get("/",(req, res) => {
    res.render("index");
});
app.use("/simulation", simulationRouter);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});