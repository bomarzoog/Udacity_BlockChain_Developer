
var Test = require('../config/testConfig.js');
var BigNumber = require('bignumber.js');

contract('Flight Surety Tests', async (accounts) => {

  var config;
  before('setup contract', async () => {
    config = await Test.Config(accounts);
    await config.flightSuretyData.authorizeCaller(config.flightSuretyApp.address);
       
  });

  /****************************************************************************************/
  /* Operations and Settings                                                              */
  /****************************************************************************************/

   it(`(multiparty) has correct initial isOperational() value`, async function () {

    // Get operating status
    
    let status = await config.flightSuretyData.isOperational.call();
    
    assert.equal(status, true, "Incorrect initial operating status value");
    
  });

   it(`(multiparty) can block access to setOperatingStatus() for non-Contract Owner account`, async function () {

      // Ensure that access is denied for non-Contract Owner account
      let accessDenied = false;
      
      try 
      {
          await config.flightSuretyData.setOperatingStatus(false, { from: accounts[2] });
      }
      catch(e) {
          accessDenied = true;
      }
      
      assert.equal(accessDenied, true, "Access not restricted to Contract Owner");
            
  });

  it(`(multiparty) can allow access to setOperatingStatus() for Contract Owner account`, async function () {

      // Ensure that access is allowed for Contract Owner account
      let accessDenied = false;
      try 
      {
          await config.flightSuretyData.setOperatingStatus(false, { from: config.owner });
      }
      catch(e) {
          accessDenied = true;
      }
      assert.equal(accessDenied, false, "Access not restricted to Contract Owner");

     
  });

  it(`(multiparty) can block access to functions using requireIsOperational when operating status is false`, async function () {

      await config.flightSuretyData.setOperatingStatus(false, { from: config.owner });
        
      let reverted = false;
      try 
      {
          await config.flightSuretyData.testFunction({ from: config.firstAirline });
      }
      catch(e) {
          reverted = true;
      }
      assert.equal(reverted, true, "Access not blocked for requireIsOperational");      

      // Set it back for other tests to work
      reverted = false;
      try {
        await config.flightSuretyData.setOperatingStatus(true);
      }catch(e) {
        reverted = true;
      }
      assert.equal(reverted, false, "Reset operational status failed");
  });

   it('(airline) can register an Airline using registerAirline() if it is funded', async () => {
    
    // ARRANGE
    let newAirline = accounts[2];
    let payment  = web3.utils.toWei("10", "ether").toString();
    try {
      await config.flightSuretyApp.fund({from: config.firstAirline, value: payment, gasPrice: 0, gas:230000});
    }
    catch(e) {
      console.log(e);
    }
    
    let reverted = false;
    // ACT
    try {
        await config.flightSuretyApp.registerAirline(newAirline, {from: config.firstAirline});
    }
    catch(e) {
      reverted = true;
    }
    let result = await config.flightSuretyData.isRegistered.call(newAirline); 

    // ASSERT
    assert.equal(result, true, "Airline should be able to register another airline if it has been funded");
    assert.equal(reverted, false, "Airline should be able to register another airline if it has been funded");

  });

  it('(airline) cannot register an Airline using registerAirline() if it is not funded', async () => {
    
    // ARRANGE
    let newAirline = accounts[3];

    let reverted = false;
    // ACT
    try {
        await config.flightSuretyApp.registerAirline(newAirline, {from: accounts[2]});
    }
    catch(e) {
      reverted = true;
    }
    let result = await config.flightSuretyData.isRegistered.call(newAirline); 

    // ASSERT
    assert.equal(result, false, "Airline should not be able to register another airline if it hasn't provided funding");

  });

  
});
