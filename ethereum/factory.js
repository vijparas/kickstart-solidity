import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const campaignFactoryInstance= new web3.eth.Contract(
        JSON.parse(CampaignFactory.interface),
        '0x5d506d20B9dE7064a1f445273CA86728B2124B71'
);
export default campaignFactoryInstance;
