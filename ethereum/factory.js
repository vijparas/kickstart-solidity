import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const campaignFactoryInstance= new web3.eth.Contract(
        JSON.parse(CampaignFactory.interface),
        '0xBd9AE7D3e8772F3E07c95d86f1dB9c898C6Cf7C8'
);
export default campaignFactoryInstance;
