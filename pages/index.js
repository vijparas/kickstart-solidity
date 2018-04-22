import React,{Component} from 'react';
import factory from'../ethereum/factory';
class ShowCampaigns extends Component{
  async componentDidMount(){
   const campaigns = await factory.methods.getDeoloyedCampaigns().call();
   console.log(campaigns);
  }
  render(){
    return <div>Campaign Index</div>;
  }
}
export default ShowCampaigns;
