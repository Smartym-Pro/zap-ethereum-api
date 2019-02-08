const TokenFactory = artifacts.require("./TokenFactory.sol");

module.exports = async function(deployer) {
    await deployer.deploy(TokenFactory);
};
