// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

interface IDaf {
    function balanceOf(address) external view returns (uint256);

    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function currency() external view returns (address);

    function governanceTokensPrice() external view returns (uint256);
}
