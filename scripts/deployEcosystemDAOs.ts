import "@nomiclabs/hardhat-waffle";
import { ethers, waffle } from "hardhat";

import DaoViewerArtifact from "../artifacts/contracts/EcosystemDAOs.sol/EcosystemDAOs.json";

import { EcosystemDAOs } from "../typechain/EcosystemDAOs";

const { deployContract } = waffle;

async function main() {
  const signers = await ethers.getSigners();

  const EcosystemDAOs = (await deployContract(
    signers[0],
    DaoViewerArtifact
  )) as EcosystemDAOs;

  console.log(EcosystemDAOs.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
