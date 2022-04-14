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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IAaveOracleInterface extends ethers.utils.Interface {
  functions: {
    "BASE_CURRENCY()": FunctionFragment;
    "BASE_CURRENCY_UNIT()": FunctionFragment;
    "getAssetPrice(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BASE_CURRENCY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BASE_CURRENCY_UNIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetPrice",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "BASE_CURRENCY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BASE_CURRENCY_UNIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetPrice",
    data: BytesLike
  ): Result;

  events: {};
}

export class IAaveOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IAaveOracleInterface;

  functions: {
    BASE_CURRENCY(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "BASE_CURRENCY()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "BASE_CURRENCY_UNIT()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getAssetPrice(
      asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getAssetPrice(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  BASE_CURRENCY(overrides?: CallOverrides): Promise<string>;

  "BASE_CURRENCY()"(overrides?: CallOverrides): Promise<string>;

  BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;

  "BASE_CURRENCY_UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

  getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getAssetPrice(address)"(
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    BASE_CURRENCY(overrides?: CallOverrides): Promise<string>;

    "BASE_CURRENCY()"(overrides?: CallOverrides): Promise<string>;

    BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    "BASE_CURRENCY_UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getAssetPrice(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    BASE_CURRENCY(overrides?: CallOverrides): Promise<BigNumber>;

    "BASE_CURRENCY()"(overrides?: CallOverrides): Promise<BigNumber>;

    BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    "BASE_CURRENCY_UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getAssetPrice(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASE_CURRENCY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "BASE_CURRENCY()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BASE_CURRENCY_UNIT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "BASE_CURRENCY_UNIT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssetPrice(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAssetPrice(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
