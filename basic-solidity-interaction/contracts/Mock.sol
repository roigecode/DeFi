pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT

contract Mock {
    uint public variable;
    
    function setVar(uint _num) external {
        variable = _num;
    }
}