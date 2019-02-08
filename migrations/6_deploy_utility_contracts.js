const ZapCoordinator = artifacts.require('./ZapCoordinator.sol');
const ERCDotFactory = artifacts.require('./ERCDotFactory.sol');
const TokenFactory = artifacts.require('./TokenFactory.sol');

module.exports = async function(deployer, network) {
    console.log("Deploying utility contracts on: " + network);

     if(ZapCoordinator.address) {
        await deployer.deploy(ERCDotFactory, ZapCoordinator.address, TokenFactory.address);
        const dotFactoryInstance = ERCDotFactory.deployed(); 
     }
     else{
        console.log('ZapCoordinator not found');
     }
};


