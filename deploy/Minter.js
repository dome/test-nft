module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  await deploy("TK9Minter", {
    contract: "TK9Minter",
    args: [process.env.NFT_ADDRESS,process.env.COLLECTOR],
    from: deployer,
    log: true,
  });
};

module.exports.tags = ["Minter"];
