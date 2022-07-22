
const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/4fe0ba0026414bbe88c8f47321fd6a82"
);





//---------------for 10 last black-----------------
// web3.eth.getBlockNumber().then((latest) =>{
//   for(var i = 0; i < 10; i++){
//     web3.eth.getBlock(latest - i).then((block) =>{
//       console.log(block.number);
//     })
//   }
// })


// //-------------inspecting block----------------
// web3.eth.getBlock('latest').then((block) =>{
//   console.log(
//     'block hash:', block.hash ,
//     'block size:', block.size ,
//     'timestamp: ', block.time ,
//     'nonce:     ', block.nonce
//   );
// })

// //-------------inspecting block----------------

// web3.eth.getBlock((0),(err,block) =>{
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(block);
//   }
// })
// //------------- end inspecting block----------------


////--------------getBlockTransactionCount
// web3.eth.getBlockTransactionCount('latest').then(console.log)


////---------------get block-------------------------
// web3.eth.getBlock('latest').then((response) =>{
//   console.log(response.hash);
// })



let hash = '0x09efa78ee87b4cce6272a4d51555a07acfed79e627ba17d7d1d622abd35e513a'

web3.eth.getBlock("latest")
.then((a) =>{
  console.log(a);
});