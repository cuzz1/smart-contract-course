const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  let provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
  let wallet = new ethers.Wallet(
    "96a50eb4f0633eb67a9f7f089e157aebf1c1adc68c1f42084ade4abb1654a447",
    provider
  );

  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy();
  console.log(contract);
  console.log(`Contract deployed to ${contract.address}`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
