var ZapToken = artifacts.require("./ZapToken.sol");

module.exports = async function(deployer) {
    await deployer.deploy(ZapToken);
};
