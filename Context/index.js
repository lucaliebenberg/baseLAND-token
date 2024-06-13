import React, { useState, useContext, createContext, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import toast from "react-hot-toast";

//INTERNAL IMPORT
import {
  ChechIfWalletConnected,
  connectWallet,
  getBalance,
  connectingTOKEN_SALEContract,
  connectingTOKENContract,
} from "../Utils/index";
import { TOKEN_SALE_ADDRESS, OWNER_ADDRESS } from "./constants";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });
  //  STATE VARIABLE
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState();
  const [nativeToken, setNativeToken] = useState();
  const [tokenHolders, setTokenHolders] = useState([]);
  const [tokenSale, setTokenSale] = useState();
  const [currentHolder, setCurrentHolder] = useState();
  const [loader, setLoader] = useState(false);

  const fetchInitialData = async () => {
    try {
      //GET USER ACCOUNT
      const account = await ChechIfWalletConnected();
      //GET USER BALANCE
      const balance = await getBalance();
      setBalance(ethers.utils.formatEther(balance.toString()));
      setAddress(account);

      //TOKEN_CONTRACT
      const TOKEN_CONTRACT = await connectingTOKENContract();

      let tokenBalance;
      if (account) {
        tokenBalance = await TOKEN_CONTRACT.balanceOf(account);
      } else {
        tokenBalance = 0;
      }

      const tokenName = await TOKEN_CONTRACT.name();
      const tokenSymbol = await TOKEN_CONTRACT.symbol();
      const tokenTotalSupply = await TOKEN_CONTRACT.totalSupply();
      const tokenStandard = await TOKEN_CONTRACT.standard();
      const tokenHolders = await TOKEN_CONTRACT._userId();
      const tokenOwnerOfContract = await TOKEN_CONTRACT.ownerOfContract();
      const tokenAddress = await TOKEN_CONTRACT.address;

      const nativeToken = {
        tokenAddress: tokenAddress,
        tokenName: tokenName,
        tokenSymbol: tokenSymbol,
        tokenOwnerOfContract: tokenOwnerOfContract,
        tokenStandard: tokenStandard,
        tokenTotalSupply: ethers.utils.formatEther(tokenTotalSupply.toString()),
        tokenBalance: ethers.utils.formatEther(tokenBalance.toString()),
        tokenHolders: tokenHolders.toNumber(),
      };
      setNativeToken(nativeToken);

      //GETTING TOKEN HOLDERS
      const getTokenHolder = await TOKEN_CONTRACT.getTokenHolder();
      setTokenHolders(getTokenHolder);

      //GETTING TOKEN HOLDER DATA
      if (account) {
        const getTokenHolderData = await TOKEN_CONTRACT.getTokenHolderData(
          account
        );

        const currentHolder = {
          tokenId: getTokenHolderData[0].toNumber(),
          from: getTokenHolderData[1],
          to: getTokenHolderData[2],
          totalToken: ethers.utils.formatEther(
            getTokenHolderData[3].toString()
          ),
          tokenHolder: getTokenHolderData[4],
        };
        setCurrentHolder(currentHolder);
      }

      //TOKEN SALE CONTRACT
      const TOKEN_SALE_CONTRACT = await connectingTOKEN_SALEContract();
      const tokenPrice = await TOKEN_SALE_CONTRACT.tokenPrice();
      const tokenSold = await TOKEN_SALE_CONTRACT.tokensSold();
      const tokenSupply = await TOKEN_SALE_CONTRACT.totalTokenSupply();
      const tokenSaleBalance = await TOKEN_CONTRACT.balanceOf(
        TOKEN_SALE_ADDRESS
      );

      const tokenSale = {
        tokenPrice: ethers.utils.formatEther(tokenPrice.toString()),
        tokenSold: tokenSold.toNumber(),
        tokenSaleBalance: ethers.utils.formatEther(tokenSaleBalance.toString()),
        tokenTotalSupply: ethers.utils.formatEther(tokenSupply.toString()),
      };

      setTokenSale(tokenSale);
      console.log(tokenSale);
      console.log(nativeToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const buyToken = async (nToken) => {
    try {
      notifySuccess("Transaction processing, please wait..");
      setLoader(true);

      const contract = await connectingTOKEN_SALEContract();
      const tokenPrice = await contract.tokenPrice();

      const price = ethers.utils.formatEther(tokenPrice.toString());

      const transferAmount = Number(nToken) * Number(price);

      const amount = ethers.utils.parseUnits(
        transferAmount.toString(),
        "ether"
      );

      const buying = await contract.buyTokens(nToken, {
        value: amount.toString(),
        // gasLimit: ethers.utils.hexlify(8000000),
      });
      await buying.wait();
      console.log(buying);
      setLoader(false);
      notifySuccess("Transaction completed successfully");
      window.location.reload();
    } catch (error) {
      setLoader(false);
      notifyError(
        "Transaction failed, try after some time, and check block explorer"
      );
      console.log(error);
    }
  };

  //NATIVE TOKEN TRANSFER
  const transferNativeToken = async () => {
    try {
      const account = await ChechIfWalletConnected();
      if (account != OWNER_ADDRESS.toLowerCase())
        return notifyError("your are not an owner");

      notifySuccess("Transaction processing, please wait..");
      setLoader(true);

      // TODO: update tokenAmount -> 50000000
      // const TOKEN_AMOUNT = 5000000;
      const TOKEN_AMOUNT = 50000000;
      const tokens = TOKEN_AMOUNT.toString();
      const transferAmount = ethers.utils.parseEther(tokens);

      const contract = await connectingTOKENContract();
      const transaction = await contract.transfer(
        TOKEN_SALE_ADDRESS,
        transferAmount
      );
      console.log(contract);

      await transaction.wait();
      console.log(transaction);
      setLoader(false);
      notifySuccess("Transaction conpleted successfully");
      window.location.reload();
    } catch (error) {
      setLoader(false);
      notifyError(
        "Transaction failed, try after some time, and check block explorer"
      );
      console.log(error);
    }
  };

  const updateTokenSupplySale = async () => {
    try {
      const account = await ChechIfWalletConnected();
      if (account != OWNER_ADDRESS.toLowerCase())
        return notifyError("your are not an owner");
      notifySuccess("Transaction processing, please wait..");
      setLoader(true);

      const contract = await connectingTOKEN_SALEContract();
      const tokenSupply = await contract.totalTokenSupply();

      const updating = ethers.utils.formatEther(tokenSupply.toString());
      const supply = 1000 + updating * 1;
      const amount = ethers.utils.parseUnits(supply.toString(), "ether");

      const transaction = await contract.updateSupply(amount);
      console.log(contract);

      await transaction.wait();
      console.log(transaction);
      setLoader(false);
      notifySuccess("Transaction conpleted successfully");
      window.location.reload();
    } catch (error) {
      notifyError(
        "Transaction failed, try after some time, and check block explorer"
      );
      setLoader(false);
      console.log(error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        transferNativeToken,
        updateTokenSupplySale,
        buyToken,
        setAddress,
        connectWallet,
        currentHolder,
        tokenSale,
        tokenHolders,
        nativeToken,
        balance,
        address,
        loader,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
