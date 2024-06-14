const hre = require("hardhat");

const tokens = (nToken) => {
  return ethers.utils.parseUnits(nToken.toString(), "ether");
};

async function main() {
  // baseLAND
  // 500 tokens = 500 0000
  // 100 000 000 0000 = 100 mil
  const _initialSupply = tokens(5000000000000); // TODO: update intialSupply -> 100000000 (100mil)

  const ReFiTokenSale = await hre.ethers.getContractFactory(
    "ReFiTokenSale"
  );
  const theReFiTokenSale = await ReFiTokenSale.deploy(_initialSupply);

  await theReFiTokenSale.deployed();
  console.log(` ReFiTokenSale: ${theReFiTokenSale.address}`);

  //TOKEN SALE
  // TODO: update tokenPrice:-> $0.001/token
  // const _tokenPrice = tokens(0.05);
  const _tokenPrice = tokens(0.000003); // ether
  // TODO: update the above to: 0.0000003 [ done ]
  // 0,001 * 
  // TODO: update tokenSupply -> 50 000 000 (50 mil) [ done ]
  // const _totalSupply = tokens(1000);
  const _totalSupply = tokens(50000000);
  // 50000000

  const TokenSale = await hre.ethers.getContractFactory("TokenSale");
  const tokenSale = await TokenSale.deploy(
    theReFiTokenSale.address,
    _tokenPrice,
    _totalSupply
  );

  await tokenSale.deployed();
  console.log(` TokenSale: ${tokenSale}`);
  console.log(` TokenSale address: ${tokenSale.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//npx hardhat run scripts/deploy.js --network base_mainnet
//npx hardhat run scripts/deploy.js --network localhost
