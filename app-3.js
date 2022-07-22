const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require("web3");
const web3 = new Web3(
  "https://rinkeby.infura.io/v3/4fe0ba0026414bbe88c8f47321fd6a82"
);

const account1 = "0x838ce60e767E6227CD09F1A8d7B4C78f7A9f9882";
const account2 = "0xFC9D93Bdfef4448819D588b2346526de4Be628c7";

const privateKey1 = Buffer.from('5c75e0b7c9507f8abcbb4bfb3771d4b32b0631defe47196d021e7187ba32a705' ,'hex');
const privateKey2 = Buffer.from('f7460ecf4e60014f2b91381cef84d9edeeb5083b56da2d00e967a2677d3e10eb','hex');


web3.eth.getTransactionCount(account2, (err, txCount) => {
//----------------build the transaction----------------
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account1,
    value: web3.utils.toHex(Web3.utils.toWei("0.02", "ether")),
    gasLimit: web3.utils.toHex(3000000),
    gasPrise: web3.utils.toHex(Web3.utils.toWei("24", "gwei")),
  }
 //----------------End build the transaction----------------

//–––––––––––––––––sing the transaction–––––––––––––––––
var tx = new Tx(txObject, {'chain':'rinkeby'});
tx.sign(privateKey2)

var serializedTx = tx.serialize();
var raw = '0x' + serializedTx.toString('hex')

//–––––––––––––––––END sing the transaction–––––––––––––––––


// //––––––––––––––Brodcast the transaction––––––––––––––
web3.eth.sendSignedTransaction(raw, (err, txHash) => {
  console.log('txHash:', txHash)
})
// // //––––––––––––––END Brodcast the transaction––––––––––––––
});



// //----------------------------Balance acounte----------------------------------

// // web3.eth.getBalance(account1, (err, bal) => {
// //   console.log("acounte 1 balance:", web3.utils.fromWei(bal, "ether"));
// // });

// // web3.eth.getBalance(account2, (err, bal) => {
// //   console.log("acounte 2 balance:", web3.utils.fromWei(bal, "ether"));
// // });

// //--------------------------End Balance acounte----------------------------------

// //––––––––––––––new style Brodcast the transaction––––––––––––––
// web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//   if (err) {
//       console.log(err);
//   }
//   else {
//       console.log("Mint Transaction Hash : " + txHash);
//       console.log("Token minting successful.");
//       return txHash;
//   }
// })
// })