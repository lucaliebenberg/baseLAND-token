import { ethers } from "ethers";
import Web3Modal from "web3modal";

import {
  TOKEN_ADDRESS,
  TOKEN_ABI,
  TOKEN_SALE_ADDRESS,
  TOKEN_SALE_ABI,
  handleNetworkSwitch,
} from "../Context/constants";

export const ChechIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install MateMask");
    await handleNetworkSwitch();
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

export const connectWallet = async () => {
  try {
    if (!window.ethereum) return console.log("Install MetaMask");
    await handleNetworkSwitch();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const firstAccount = accounts[0];
    window.location.reload();
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

//TOKEN CONTRACT
const fetchTokenContract = (signerOrProvider) =>
  new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, signerOrProvider);

export const connectingTOKENContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchTokenContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const getBalance = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    return await signer.getBalance();
  } catch (error) {
    console.log(error);
  }
};

const fetchTOKEN_SALEContract = (signerOrProvider) =>
  new ethers.Contract(TOKEN_SALE_ADDRESS, TOKEN_SALE_ABI, signerOrProvider);

export const connectingTOKEN_SALEContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchTOKEN_SALEContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};
