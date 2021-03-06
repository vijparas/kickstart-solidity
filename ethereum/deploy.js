const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const compiledFactory=require('./build/CampaignFactory.json');

//const {interface,bytecode}=require('./compile.js');

const provider=new HDWalletProvider(
'trap lesson energy gauge recipe attract black maid pilot calm capital benefit',
'https://rinkeby.infura.io/SfKo0rixhccsqkUN3qF8'

);
const web3=new Web3(provider);

const deploy = async ()=>{

  const accounts=await web3.eth.getAccounts();
  console.log('Attempting to deployy contract with account '+accounts[0]);

try{
  const result=await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({data:compiledFactory.bytecode})
  .send({gas:'1000000',from:accounts[0]});
  console.log(compiledFactory.interface);
  console.log("Account deployed to "+result.options.address);
}
catch(error){
  console.log(error);
}


};
deploy();
