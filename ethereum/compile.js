const path=require('path');
const solc=require('solc');
const fs=require('fs-extra');

const buildPath=path.resolve(__dirname,'build');
// remove entire build directory
//fs.removeSync(buildPath);

const campaignPath=path.resolve(__dirname,"contracts",'Campaign.sol');
//rwad contents of the Campaign file
const source=fs.readFileSync(campaignPath,'utf-8');

//compile the file using solidity compiler and store the contracts property in output variable

const output=solc.compile(source,1).contracts;

console.log(output);
//  create build directory

//fs.ensureDirSync(buildPath);
//fs.chmod(buildPath, '777', function(err){
//     if(err){
//       console.log("something went wrong");
//     }
//     else{
//       console.log("file permission changes");
//     }
// });
// here we are going to take the compiled output and parse it to save the
//output into two seperate json files which will contain the code
// for Campiagn Contract and CampaignFactory contract
 for(let contract in output){
    console.log("insider for loop");
  fs.outputJsonSync(
  path.resolve(buildPath, contract.replace(':','') + '.json'),
    output[contract]
  );
}
