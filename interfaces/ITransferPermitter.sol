// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ITransferPermitter {
    function isTokenTransferPermitted(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}