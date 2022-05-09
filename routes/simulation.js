
const simulationPost = require("../controllers/simulationController").createSimulation_post;
const simulationGet = require("../controllers/simulationController").getSimulations_get;
const simulationGetId = require("../controllers/simulationController").getSimulationWithId_get;
const simulationDelete = require("../controllers/simulationController").deleteSimulation_delete;

const express = require("express");
const bodyParser = require("body-parser");
const { deleteSimulation_delete } = require("../controllers/simulationController");

const router = express.Router();

let jsonParser = bodyParser.json();

router.post("/createSimulation/execute", jsonParser, simulationPost);
router.get("/createSimulation/", (req,res) =>
{
    res.render("createSimulationPage");
});
router.get("/getSimulations", simulationGet);
router.get("/getSimulations/:id",simulationGetId);
router.get("/",(req,res) => {
    res.render("simulation");
})
router.delete("/deleteSimulation/:id",deleteSimulation_delete);

module.exports = router;


