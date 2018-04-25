# Kickstart Campaign Smart Contract

## Introduction
##### Kickstart is a Ethereum Based Project in which we are building smart contract to enable campaign funding.  Whenever a person wants to raise money for his project he can create a new campaign along with minimum contribution required. Any person willing to be a contributor can transfer ethereum from his account and will become a contributor. Whenever Campaign Manager needs to withdraw money from the project pool he has to raise a withdrawal request mentioning amount and address of the service provider. The contributors need to provide conscious for the withdrawl request. Conscious will be reached when atleast 50% of contributors votes in favor. Once conscious has been received the ether will be transferred to the account of service provider provided while create withdraw request.

## Project Structure
##### Files related to ethereum are saved in ethereum directory
##### React Components are saved in components directory
##### next.js files are saved in pages folder
##### test are saved in test directory.

### Pre-requistes
##### Node
##### NPM
##### Metamask Browser Plugin

###  Compilation Step
#####  To compile Smart Contracts we need to recompile our Solidity Files. To compile solidity files go to ethereum folder and 
#####  use command npm run compile.js. Compiled solidity files can be found inside build directory.

### Deployment Step
##### To deploy contract to network go to ethereum folder and use npm run deploy.js.

### Installation Steps
##### To install Node modules go to project folder and execute command  npm install

### Tests
##### Tests are accessible inside test directory.
##### To execute tests go to project folder and execute command npm run test.

##### Application will be accessible at http://localhost:3000



