// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleStorage {
    uint256 public favoriateNumber;

    mapping(string => uint256) public nameToFavoriateNumber;

    function addPerson(string memory _name, uint256 _favoriateNumber) public {
        nameToFavoriateNumber[_name] = _favoriateNumber;
    }

    function store(uint256 _favoraiteNumber) public virtual {
        favoriateNumber = _favoraiteNumber;
    }

    function retriveve() public view returns (uint256) {
        return favoriateNumber;
    }
}
