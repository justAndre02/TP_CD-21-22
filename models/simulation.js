let simulations = [];

const createSimulation = (nMachines, nJobs, nOperations) =>
{
    simulations.push({numberOfMachines : nMachines, numberOfJobs: nJobs, numberOfOperations: nOperations});
    return true;
} 

const getSimulations = () => 
{
    return simulations;
}

const getSimulationWithId = (id) =>
{
    if(id < 1 || id > simulations.length) return "Simulation doesn't exist";
    return simulations[id - 1];
}

const deleteSimulation = (id) => {
    simulations.splice(id, 1);
    return true;
}

exports.createSimulation = createSimulation;
exports.getSimulations = getSimulations;
exports.deleteSimulation = deleteSimulation;
exports.getSimulationWithId = getSimulationWithId;