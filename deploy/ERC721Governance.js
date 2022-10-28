const { ERC721_NAME, ERC721_SYMBOL, ERC721_URI, REWARD_TOKEN_ADDRESS } = process.env;

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  await deploy("ERC721Governance", {
    contract: "ERC721Governance",
    args: [ERC721_NAME, ERC721_SYMBOL, ERC721_URI, REWARD_TOKEN_ADDRESS],
    from: deployer,
    log: true,
  });
};

module.exports.tags = ["ERC721Governance"];
