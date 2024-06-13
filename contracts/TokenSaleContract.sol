// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ReFiTokenSale.sol";

contract TokenSale {
   address payable public admin;
    ReFiTokenSale public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;
    uint256 public totalTokenSupply;

    event Sell(address _buyer, uint256 _amount);

    constructor(ReFiTokenSale _tokenContract, uint256 _tokenPrice, uint256 _totalTokenSupply) {
       admin = payable(msg.sender);
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
        totalTokenSupply = _totalTokenSupply;
    }

    function updateSupply(uint256 _totalTokenSupply) public payable {
        totalTokenSupply = _totalTokenSupply;
    }

    function multiply(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require(y == 0 || (z = x * y) / y == x);
    }

    function buyTokens(uint256 _numberOfTokens) public payable {
        require(msg.value == multiply(_numberOfTokens, tokenPrice));
        require(tokenContract.balanceOf(address(this)) >= _numberOfTokens);
        require(tokenContract.transfer(msg.sender, _numberOfTokens * 1000000000000000000));

        tokensSold += _numberOfTokens;

        admin.transfer(msg.value);

        emit Sell(msg.sender, _numberOfTokens);
    }

    function endSale() public {
        require(msg.sender == admin);
        require(
            tokenContract.transfer(
                admin,
                tokenContract.balanceOf(address(this))
            )
        );

       
        admin.transfer(address(this).balance);
    }
}