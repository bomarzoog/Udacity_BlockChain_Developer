# Decentralized Star Notary Token

## Submission Information
** Please note, I used ropsten testing network instead of rinkeby, I tried to get rinkeby test Ethereums with no luck, 
it seems a tecnical issue on faucet site.

1) Your ERC-721 Token Name: `STARO Token`
2) Your ERC-721 Token Symbol: `STRO`
3) Version of the Truffle and OpenZeppelin used: `Truffle v5.4.32 (core: 5.4.32)` | `OpenZeppelin version ^0.3.2`
4) The deployed smart contract address on ropsten test network: `0x311DB490112341b3e75c7B0a8e9f46769CbA06dA`


## Testing Star Notary dApp 

### Testing on Truffle
```
truffle(develop)> test
Compiling your contracts...
===========================
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/StarNotary.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/drafts/Counters.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/introspection/ERC165.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/utils/Address.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/contracts/StarNotary.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/drafts/Counters.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/introspection/ERC165.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/utils/Address.sol
> Artifacts written to /var/folders/lh/ckfnv_gj1z1_qdtwnvdcpmcr0000gp/T/test--12026-A6a1e3YrP61D
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang



  ✓ can Create a Star (74ms)
  ✓ lets user1 put up their star for sale (80ms)
  ✓ lets user1 get the funds after the sale (114ms)
  ✓ lets user2 buy a star, if it is put up for sale (115ms)
  ✓ lets user2 buy a star and decreases its balance in ether (108ms)
  ✓ can add the star name and star symbol properly (52ms)
  ✓ lets 2 users exchange stars (137ms)
  ✓ lets a user transfer a star (80ms)
  ✓ lookUptokenIdToStarInfo test (48ms)

  9 passing (811ms)
```

  ###  Deploying to Ropsten

```
  % truffle migrate --reset --network ropsten

Compiling your contracts...
===========================
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/StarNotary.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/drafts/Counters.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/introspection/ERC165.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol
> Compiling ./node_modules/openzeppelin-solidity/contracts/utils/Address.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/contracts/StarNotary.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/drafts/Counters.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/introspection/ERC165.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/introspection/IERC165.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol
> Compiling ./../../Udacity_SmartContract_lesson_2/nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code-main/node_modules/openzeppelin-solidity/contracts/utils/Address.sol
> Artifacts written to /Users/moathh/Desktop/GitHub_Mo/Udacity_BlockChain_Developer_Projects/project_2/build/contracts
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang



Starting migrations...
======================
> Network name:    'ropsten'
> Network id:      3
> Block gas limit: 8000000 (0x7a1200)



2_deploy_contracts.js
=====================

   Deploying 'StarNotary'
   ----------------------
   ⠋ Blocks: 0            Seconds: 0   > transaction hash:    0x503705a1f22147bdd96ea9bd41f30dd9e837ad9836e8ef232a21c26ca9baa995
   ⠹ Blocks: 0            Seconds: 0undefined
   ⠙ Blocks: 0            Seconds: 4undefined
   ⠋ Blocks: 0            Seconds: 8undefined
   ⠏ Blocks: 0            Seconds: 12undefined
   ⠧ Blocks: 0            Seconds: 16undefined
   ⠦ Blocks: 0            Seconds: 20undefined
   ⠴ Blocks: 0            Seconds: 24undefined
   ⠸ Blocks: 0            Seconds: 28undefined
   ⠹ Blocks: 0            Seconds: 32undefined
   ⠙ Blocks: 0            Seconds: 36undefined
   ⠦ Blocks: 0            Seconds: 40undefined
   > Blocks: 1            Seconds: 44
   > contract address:    0x311DB490112341b3e75c7B0a8e9f46769CbA06dA
   > block number:        12012063
   > block timestamp:     1645723192
   > account:             0x421a0CcdaDD1472E8932CDa4066F7b12bEE36a1e
   > balance:             6.958808925994912624
   > gas used:            2174151 (0x212cc7)
   > gas price:           6.07554157 gwei
   > value sent:          0 ETH
   > total cost:          0.01320914477995707 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 2 (block: 12012066)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.01320914477995707 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.014743366502133551 ETH

```