# Create Your Own Private Blockchain


## Description

This is a simple application that use private blockchain to register/record stars ownership. Blockchain codes are deployed in `src/block.js` and `src/blockchain.js`, while a set of API endpoints are created using `express.js`, API REST calls are used to add new stars on blockchain, validate added blocks, and query stars info. 

* The purpose of this project is to get familiarity with following concepts:
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

* Make sure that Node.js is installed on your system, for more info on how to install Node.js, please check: 

        https://nodejs.dev/en/learn/how-to-install-nodejs/

* Remember if you think you need install any other library you will use :
    
    `npm install <npm_module_name>`

### Executing program

1. To run application use the command: 
    
    ```node app.js```


* You should see in your terminal a message indicating that the server is listening in port 8000:
    
    ```> Server Listening for port: 8000```

### How to test your application functionalities?

* To test your application you need to install POSTMAN or Curl to send API requests, also you need Bitcoin-Core or Electrum wallet to sign messages.

#### Test 1: **getBlockByHeight API Call**
To make sure that application is working fine and it creates the Genesis Block you can use Curl to request the Genesis block **Block 0**:

Run following Curl command will will invoke getBlockByHeight method:

```curl
curl --location --request GET 'http://localhost:8000/block/height/0'
```

```json
Response Example:

{
"timeStamp":"1672538277",
"previousHash":"0x",
"body":"2247656e6573697320426c6f636b2122",
"hash":"98a5744a796df09a6f763ac92bc3e89357d9d294fbd5eb8ee0fe8fece4fdc1f4",
"height":0
}

```




#### Test 2: **requestOwnership API Call**
- This endpoint will allow you to request a message that you will use to sign it with your Bitcoin Wallet (Electrum or Bitcoin Core)
- This is the first step before submit your Block
- The endpoint will return a message to be signed in following format:

```<WALLET_ADDRESS>:${new Date().getTime().toString().slice(0,-3)}:starRegistry```

* To get ownership message run following curl command:

```
curl -X  POST 'http://localhost:8000/requestValidation' -H 'Content-Type: application/json' -d \
'{
    "address" : "mjX46sZJcRrFhRJePbUokk9ooRLnV9MkEE"
}'

```

```
Response Example:

"mjX46sZJcRrFhRJePbUokk9ooRLnV9MkEE:1672538381:starRegistry"

```

#### Test 3: **Sign message ownership using Bitcoin-core Wallet**

Use Bitcoin-core or Electrum wallet to sign ownership message received in Test2

<img src="../assets/sign.png" width="1000"/>


#### Test 4: `Submit your star`







5. Submit your Star
     ![Request: http://localhost:8000/submitstar](https://s3.amazonaws.com/video.udacity-data.com/topher/2019/April/5ca365d3_signing-message/signing-message.png)
6. Retrieve Stars owned by me
    ![Request: http://localhost:8000/blocks/<WALLET_ADDRESS>](https://s3.amazonaws.com/video.udacity-data.com/topher/2019/April/5ca362b9_retrieve-stars/retrieve-stars.png)
```

