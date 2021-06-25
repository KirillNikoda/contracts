// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

interface IDac {
    function getAllTeammates() external view returns (address[] memory);

    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function currency() external view returns (address);

    function governanceTokensPrice() external view returns (uint256);
}
