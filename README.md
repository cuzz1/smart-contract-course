# Smart Contract Course

## Lesson 0: The Edge of the Rabbit Hole

## Lesson 1: Blockchain Basics

## Lesson 2: Welcome to Remix! Simple Storage

### Introduction

- [Remix](https://remix.ethereum.org/)
- [Solidity Documentation](https://docs.soliditylang.org/en/latest/index.html)

### Setting Up Your First Contract

- Versioning
- Take notes in your code!
- [What is a software license](https://snyk.io/learn/what-is-a-software-license/)
- SPDX License
- Compiling
- Contract Declaration

### Basic Solidity: Types

- [Types & Declaring Variables](https://docs.soliditylang.org/en/latest/)
  - `uint256`, `int256`, `bool`, `string`, `address`, `bytes32`
  - [Solidity Types](https://docs.soliditylang.org/en/latest/types.html)
  - [Bits and Bytes](https://www.youtube.com/watch?v=Dnd28lQHquU)
- Default Initializations
- Comments

```solidity

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8; 

contract SimpleStorage {
    // boolean, uint, int, address, bytes
    bool hasFavoriateNumber = false;
    
    uint favoriateNumberUint = 123;
    string favoriateNumberInText = "Five";
    address myAdress = 0xF6CF8e675fF7e8e1C7599209771ccE9CD28427cD;
    bytes32 favoriateBytes = "cat";

    // This gets initialized to zero!
    // public visible externally and internally
    uint256 public favoriateNumber;

}

```

## Basic Solidity: Functions

- Functions
- Deploying a Contract
  - Smart Contracts have addresses just like our wallets
- Calling a public state-changing Function
- [Visibility](https://docs.soliditylang.org/en/latest/contracts.html#visibility-and-getters)
- Gas III | An example
- Scope
- View & Pure Functions

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8; 

contract SimpleStorage {

    uint256 public favoriateNumber;

    // function
    function store(uint256 _favoriteNumber) public {
        favoriateNumber = _favoriteNumber;
    } 

    function retriveve() public view returns(uint256) {
        return favoriateNumber;
    }

    function add() public pure returns(uint256) {
        return (1 + 1);
    }

}

```
## Basic Solidity: Arrays & Structs

- Structs
- Intro to Storage
- Arrays
- Dynamic & Fixed Sized
- `push` array function

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8; 

contract SimpleStorage {

    uint256 favoriateNumber;

    People public person = People(
        {
            name: "cuzz",
            favoriateNumber: 1
        }
    );

    People[] public people;

    struct People {
        string name;
        uint256 favoriateNumber;
    }
    
    function addPerson(string memory _name, uint256 _favoriateNumber) public {
        people.push(People(_name,_favoriateNumber));
    }

}

```

## Basic Solidity: Compiler Errors and Warnings

- Yellow: Warnings are Ok
- Red: Errors are not Ok

## Site

- [MetaMask](https://metamask.io/) 在线钱包
- [EtherScan](https://etherscan.io/) 查看以太坊地址交易活动
- [Rinkeby](https://www.rinkeby.io/) 以太坊的测试网络
  - [Rinkeby EtherScan](https://rinkeby.etherscan.io/) 查看 Rinkeby 交易活动
  - [Chain Link](https://faucets.chain.link/) 获取领水
- [Blockchain Demo Block](https://andersbrownworth.com/blockchain/block) 区块链生成演示
- [Blockchain Demo Keys](https://andersbrownworth.com/blockchain/public-private-keys/keys) 秘钥
- [Remix](https://remix.ethereum.org/) 智能合约编辑器
- [Solidity Documentation](https://docs.soliditylang.org/en/latest/index.html) Solidity 文档

## Resource

- [Youtube](https://www.youtube.com/watch?v=gyMwXuJrbJQ)
- [Github](https://github.com/smartcontractkit/full-blockchain-solidity-course-js)