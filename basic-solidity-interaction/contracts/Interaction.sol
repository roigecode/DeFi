pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT
/// @author Roige.
/// @notice This contract aims to have an on-chain API like functionallity.
/// @dev You can ignore the interfaces declarations. 

contract Interaction {
    address counterAddress;
    address mockAddress;

    /// @dev Address setters:

    function setCounterAddress(address _counter) public payable {
       counterAddress = _counter;
    }

    function setMockAddress(address _mock) public payable{
        mockAddress = _mock;
    }

    /// @dev Actual interacter functions (setters):

    function interacter_increment() public payable{
        return ICounter(counterAddress).increment();
    }

    function interacter_setVar(uint _num) public payable{
        return IMock(mockAddress).setVar(_num);
    }

    /// @dev Variable getters:

    function interacter_getCount() external view returns (uint) {
        return ICounter(counterAddress).count();
    }

    function interacter_getVar() external view returns (uint) {
        return IMock(mockAddress).variable();
    }

}


/// @dev    Interfaces declarations:
/// @notice Although Solidity automatically provides getters for public variables it is mandatory to declare them in the interfaces!

interface ICounter {
    function count() external view returns (uint);
    function increment() external;
}

interface IMock {
    function variable() external view returns (uint);
    function setVar(uint _num) external;
}