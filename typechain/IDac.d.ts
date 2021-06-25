/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IDacInterface extends ethers.utils.Interface {
  functions: {
    "currency()": FunctionFragment;
    "getAllTeammates()": FunctionFragment;
    "governanceTokensPrice()": FunctionFragment;
    "name()": FunctionFragment;
    "symbol()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "currency", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAllTeammates",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governanceTokensPrice",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;

  decodeFunctionResult(functionFragment: "currency", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllTeammates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governanceTokensPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;

  events: {};
}

export class IDac extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IDacInterface;

  functions: {
    currency(overrides?: CallOverrides): Promise<[string]>;

    "currency()"(overrides?: CallOverrides): Promise<[string]>;

    getAllTeammates(overrides?: CallOverrides): Promise<[string[]]>;

    "getAllTeammates()"(overrides?: CallOverrides): Promise<[string[]]>;

    governanceTokensPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    "governanceTokensPrice()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    "symbol()"(overrides?: CallOverrides): Promise<[string]>;
  };

  currency(overrides?: CallOverrides): Promise<string>;

  "currency()"(overrides?: CallOverrides): Promise<string>;

  getAllTeammates(overrides?: CallOverrides): Promise<string[]>;

  "getAllTeammates()"(overrides?: CallOverrides): Promise<string[]>;

  governanceTokensPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "governanceTokensPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    currency(overrides?: CallOverrides): Promise<string>;

    "currency()"(overrides?: CallOverrides): Promise<string>;

    getAllTeammates(overrides?: CallOverrides): Promise<string[]>;

    "getAllTeammates()"(overrides?: CallOverrides): Promise<string[]>;

    governanceTokensPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "governanceTokensPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    currency(overrides?: CallOverrides): Promise<BigNumber>;

    "currency()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAllTeammates(overrides?: CallOverrides): Promise<BigNumber>;

    "getAllTeammates()"(overrides?: CallOverrides): Promise<BigNumber>;

    governanceTokensPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "governanceTokensPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    currency(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currency()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllTeammates(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getAllTeammates()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governanceTokensPrice(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "governanceTokensPrice()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}