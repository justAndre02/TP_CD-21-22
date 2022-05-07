
const simulationPost = require("../controllers/simulationController").createSimulation_post;
const simulationGet = require("../controllers/simulationController").getSimulations_get;
const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

let jsonParser = bodyParser.json();

router.post("/createSimulation", jsonParser, simulationPost);
router.get("/getSimulations", simulationGet);

module.exports = router;


