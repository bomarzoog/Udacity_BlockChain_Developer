# Create Your Own Private Blockchain


## Description

This is a simple application that use private blockchain to register/record stars ownership. Blockchain codes are deployed in `src/block.js` and `src/blockchain.js`, while a set of API endpoints are created using `express.js`, API REST calls are used to add new stars on blockchain, validate added blocks, and query stars info. 

The purpose of this project is to get familiarity with following concepts:
    - Block
    - Blockchain
    - Wallet
    - Blockchain Identity
    - Proof of Existence
    - Digital Assets


## Getting Started

- This application will be created using Node.js and Javascript programming language. 

### Dependencies

* Some of the libraries or npm modules you will use are:
    - "bitcoinjs-lib": "^4.0.3",
    - "bitcoinjs-message": "^2.0.0",
    - "body-parser": "^1.18.3",
    - "crypto-js": "^3.1.9-1",
    - "express": "^4.16.4",
    - "hex2ascii": "0.0.3",
    - "morgan": "^1.9.1"



### Installing

* Make sure that Node.js is installed on your system, for more info on how to install Node.js, please check: `(https://nodejs.dev/en/learn/how-to-install-nodejs/)`

* Remember if you think you need install any other library you will use :
    
    npm install <npm_module_name>

### Executing program

#### Starting Program

1. To run application use the command: 
    
    `node app.js`


* You should see in your terminal a message indicating that the server is listening in port 8000:
    
    `> Server Listening for port: 8000`

#### How to test your application functionalities?

To test your application you need to install POSTMAN or Curl to send API requests, also you need Bitcoin-Core or Electrum wallet to sign messages.

Always is useful to debug your code see what is happening in your algorithm, so I will let you this video for you to check on how to do it >https://www.youtube.com/watch?v=6cOsxaNC06c . Try always to debug your code to understand what you are doing.

1. Run your application using the command `node app.js`


2. To make sure your application is working fine and it creates the Genesis Block you can use POSTMAN to request the Genesis block:
    ![Request: http://localhost:8000/block/0 ](https://s3.amazonaws.com/video.udacity-data.com/topher/2019/April/5ca360cc_request-genesis/request-genesis.png)
3. Make your first request of ownership sending your wallet address:
    ![Request: http://localhost:8000/requestValidation ](https://s3.amazonaws.com/video.udacity-data.com/topher/2019/April/5ca36182_request-ownership/request-ownership.png)
4. Sign the message with your Wallet:
    ![Use the Wallet to sign a message](https://s3.amazonaws.com/video.udacity-data.com/topher/2019/April/5ca36182_request-ownership/request-ownership.png)
5. Submit your Star
     ![Request: http://localhost:8000/submitstar](https://s3.amazonaws.com/video.udacity-data.com/topher/2019/April/5ca365d3_signing-message/signing-message.png)
6. Retrieve Stars owned by me
    ![Request: http://localhost:8000/blocks/<WALLET_ADDRESS>](https://s3.amazonaws.com/video.udacity-data.com/topher/2019/April/5ca362b9_retrieve-stars/retrieve-stars.png)
```

