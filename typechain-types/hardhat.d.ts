/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "QueueConsumer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.QueueConsumer__factory>;
    getContractFactory(
      name: "AddressQueueMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AddressQueueMock__factory>;
    getContractFactory(
      name: "Bytes32QueueMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Bytes32QueueMock__factory>;
    getContractFactory(
      name: "Uint256QueueMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Uint256QueueMock__factory>;

    getContractAt(
      name: "QueueConsumer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.QueueConsumer>;
    getContractAt(
      name: "AddressQueueMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AddressQueueMock>;
    getContractAt(
      name: "Bytes32QueueMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Bytes32QueueMock>;
    getContractAt(
      name: "Uint256QueueMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Uint256QueueMock>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
