const path=require('path');
const solc=require('solc');
const fs=require('fs-extra');

const buildPath=path.resolve(__dirname,'build');
// remove entire build directory
fs.removeSync(buildPath);

const campaignPath=path.resolve(__dirname,"contracts",'Campaign.sol');
//rwad contents of the Campaign file
const source=fs.readFileSync(campaignPath,'utf-8');

//compile the file using solidity compiler and store the contracts property in output variable

const output=solc.compile(source,1).contracts;

//  create build directory

fs.ensureDirSync(buildPath);
//console.log(output);
// here we are going to take the compiled output and parse it to save the
//output into two seperate json files which will contain the code
// for Campiagn Contract and CampaignFactory contract
 for(let contract in output){
   console.log(contract);
  fs.outputJsonSync(
  path.resolve(buildPath, contract.replace(':','') + '.json'),
    output[contract]
  );
}
