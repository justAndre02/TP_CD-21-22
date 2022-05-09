const createSimulation = require("../models/simulation").createSimulation;
const getSimulations = require("../models/simulation").getSimulations;
const deleteSimulation = require("../models/simulation").deleteSimulation;
const getSimulationWithId = require("../models/simulation").getSimulationWithId;

const createSimulation_post = async (req, res) => {
    
   console.log("body: ", req.body);
   createSimulation(req.body.numberOfMachines,req.body.numberOfJobs, req.body.numberOfOperations);
   await res.status(200).send("OK");
}

const getSimulations_get = async(req, res) => {
    await res.json(getSimulations());
}

const getSimulationWithId_get = async(req, res) => {
    var simulation  = getSimulationWithId(req.params.id);
    if(typeof simulation == "string"){
        await res.status(400).send(simulation);
        return false
        
    }
    await res.status(200).json(simulation);
    return false;
}

const deleteSimulation_delete = async(req, res) => {
    if(req.params.id < 1 || req.params.id > getSimulations().length)
    {
        res.status(400).send("Bad request");
        return false;
    }
    deleteSimulation(req.params.id - 1);
    
    res.status(200).send("OK");
    return true;
}

exports.createSimulation_post = createSimulation_post;
exports.getSimulations_get = getSimulations_get;
exports.deleteSimulation_delete = deleteSimulation_delete;
exports.getSimulationWithId_get = getSimulationWithId_get;