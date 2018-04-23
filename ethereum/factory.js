import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const campaignFactoryInstance= new web3.eth.Contract(
        JSON.parse(CampaignFactory.interface),
        '0x5039a58461942c2a1C2eA505De88d2809DB119Cd'
);
export default campaignFactoryInstance;
