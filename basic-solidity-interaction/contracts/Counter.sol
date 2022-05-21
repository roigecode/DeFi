pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT
/// @dev This contract implements a simple counter
 
contract Counter {
    uint public count;
    
    function increment() external {
        count += 1;
    }
}