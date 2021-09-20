const Counter = artifacts.require("../contratcs/Counter.sol");

module.exports = function (deployer) {
  deployer.deploy(Counter);
};