import Web3 from 'web3'

let web3;
if(typeof window !=='undefined' &&window.web3!=='undefined' ){
  //we are in the browser and user is runnign metamask.
    web3=new Web3(window.web3.currentProvider);
}
else{

  // we are on the server or user is not running metamask

  const provider=Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/SfKo0rixhccsqkUN3qF8'
  );
  web3=new Web3(provider);
}
export default web3;
