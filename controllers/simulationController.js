const createSimulation = require("../models/simulation").createSimulation;
const getSimulations = require("../models/simulation").getSimulations;
const createSimulation_post = async (req, res) => {
    
   console.log("body: ", req.body);
   createSimulation(req.body.numberOfMachines,req.body.numberOfJobs, req.body.numberOfOperations);
   res.sendStatus(200);
}

const getSimulations_get = async(req, res) => {

    res.json(getSimulations());
}

exports.createSimulation_post = createSimulation_post;
exports.getSimulations_get = getSimulations_get;