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

exports.createSimulation = createSimulation;
exports.getSimulations = getSimulations;