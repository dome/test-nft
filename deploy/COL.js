module.exports = async ({ getNamedAccounts, deployments, network }) => {
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  await deploy("COL", {
    from: deployer,
    args: ["0x5C8aF2064A963A6F8352Fe35f352B4043960a662"],    
    log: true,
    deterministicDeployment: false   
  });
};
module.exports.tags = ["COL"];
