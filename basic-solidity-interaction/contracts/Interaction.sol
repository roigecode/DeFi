pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT

interface ICounter {
    function count() external view returns (uint);
    function increment() external;
}

contract Interaction {
    address counterAddr;

    function setCounterAddr(address _counter) public payable {
       counterAddr = _counter;
    }

    function getCount() external view returns (uint) {
        return ICounter(counterAddr).count();
    }

    function interacter_increment() public payable{
        return ICounter(counterAddr).increment();
    }
}