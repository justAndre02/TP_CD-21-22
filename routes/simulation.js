
const simulationPost = require("../controllers/simulationController").createSimulation_post;
const simulationGet = require("../controllers/simulationController").getSimulations_get;
const simulationGetId = require("../controllers/simulationController").getSimulationWithId_get;
const simulationDelete = require("../controllers/simulationController").deleteSimulation_delete;

const express = require("express");
const bodyParser = require("body-parser");
const { deleteSimulation_delete } = require("../controllers/simulationController");

const router = express.Router();

let jsonParser = bodyParser.json();

router.post("/createSimulation", jsonParser, simulationPost);
router.get("/getSimulations", simulationGet);
router.get("/getSimulations/:id",simulationGetId);
router.delete("/deleteSimulation/:id",deleteSimulation_delete);

module.exports = router;


