
const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/4fe0ba0026414bbe88c8f47321fd6a82");
  //-------------underscore.js----------------
  // const _ = require('underscore');



// const Web3 = require("web3");
// const web3 = new Web3(
//   "https://rinkeby.infura.io/v3/4fe0ba0026414bbe88c8f47321fd6a82"
// );




// //-------------getGasPrice---------------

// web3.eth.getGasPrice().then(console.log)

// web3.eth.getGasPrice((err,result)=>{
//     console.log(result);
// })
  
// //----------converter gas price----------
  web3.eth.getGasPrice().then((result) => {
    console.log(web3.utils.fromWei(result, 'ether'));
  })



// //---------------hash sha3---------------
// console.log(web3.utils.sha3('majid'));
// console.log(web3.utils.keccak256('majid'));

// //--------------random hash------------
// console.log(web3.utils.randomHex(128));

 

// _.each({key1: 'value1', key2: 'value2'} , (value , key) =>{
//   console.log(value);
// })

