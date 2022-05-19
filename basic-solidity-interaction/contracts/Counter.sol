pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT

contract Counter {
    uint public count;
    
    function increment() external {
        count += 1;
    }
}