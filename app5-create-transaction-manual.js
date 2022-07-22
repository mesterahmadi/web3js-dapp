const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require("web3");
const web3 = new Web3(
  "https://rinkeby.infura.io/v3/4fe0ba0026414bbe88c8f47321fd6a82"
);

const account1 = "0x838ce60e767E6227CD09F1A8d7B4C78f7A9f9882";
const account2 = "0xFC9D93Bdfef4448819D588b2346526de4Be628c7";


const privateKey1 = Buffer.from('5c75e0b7c9507f8abcbb4bfb3771d4b32b0631defe47196d021e7187ba32a705' ,'hex');
const privateKey2 = Buffer.from('f7460ecf4e60014f2b91381cef84d9edeeb5083b56da2d00e967a2677d3e10eb','hex');

const contractAddress = '0xD8AFa55703A442a127761E5CA897e060Cb3dcb2b'
const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]

const contract = new web3.eth.Contract(contractABI, contractAddress)

const data = contract.methods.transfer(account2, 10000000000000).encodeABI()

web3.eth.getTransactionCount(account1, (err, txCount) => {

    // create transaction object
    var txObject = {
        nonce: web3.utils.toHex(txCount) ,
        gasLimit: web3.utils.toHex(3000000),
        gasPrice: web3.utils.toHex(Web3.utils.toWei('24', 'gwei')),
        to: contractAddress ,
        data: data
    }

    //sign the transaction
    var tx = new Tx(txObject, {'chain':'rinkeby'});
    tx.sign(privateKey1)

    var serializedTx = tx.serialize();
    var raw = '0x' + serializedTx.toString('hex')

    //broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('txHash:', txHash)
    })
})