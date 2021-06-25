/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IDafFactory } from "../IDafFactory";

export class IDafFactory__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDafFactory {
    return new Contract(address, _abi, signerOrProvider) as IDafFactory;
  }
}

const _abi = [
  {
    inputs: [],
    name: "getDafs",
    outputs: [
      {
        internalType: "contract IDaf[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];