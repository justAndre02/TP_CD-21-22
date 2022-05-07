const express = require("express");
const simulationRouter = require("./routes/simulation");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}))

app.get("/",(req, res) => {
    res.send("Hello World");
});
app.use("/simulation", simulationRouter);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
    