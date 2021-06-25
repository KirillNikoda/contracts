import "@nomiclabs/hardhat-waffle";
import { ethers, waffle } from "hardhat";

import VoteArtifact from "../artifacts/contracts/Vote.sol/Vote.json";
import { Vote } from "../typechain/Vote";

import { expect } from "chai";
import { BigNumber } from "@ethersproject/bignumber";

const { deployContract } = waffle;

describe("Vote", function () {
  let vote: Vote;
  let myAddress: string;

  beforeEach(async () => {
    const signers = await ethers.getSigners();
    myAddress = await signers[0].getAddress();
    vote = (await deployContract(signers[0], VoteArtifact, [])) as Vote;
  });

  it("Should return amount of signers", async function () {
    await vote.createVoting("Test voting", "123", "123", false);

    await vote.registerToVote(0);
    await vote.signVoting(0);
    const votings = await vote.getAllVotings();

    const exactVote = votings.find((_, idx) => idx === 0);

    if (exactVote) {
      expect(exactVote.signers.length).to.equal(1);
      expect(exactVote.signers[0]).to.equal(myAddress);
    }
  });

  it("Sign and activate voting", async function () {
    await vote.createVoting("Test voting", "123", "123", false);
    await vote.registerToVote(0);
    await vote.signVoting(0);

    await vote.activateVoting(0);
    const votings = await vote.getAllVotings();

    const exactVote = votings.find((_, idx) => idx === 0);

    if (exactVote) {
      expect(exactVote.isActivated).to.equal(true);
      expect(exactVote.signers.length).to.equal(1);
    }
  });
});
