import React,{Component} from 'react';
import factory from'../ethereum/factory';
class ShowCampaigns extends Component{
  //next doesnot execute componentDidMount function on server side
  // async componentDidMount(){
  //
  //  //console.log(campaigns);
  // }
  static async getInitialProps(){
       const campaigns = await factory.methods.getDeoloyedCampaigns().call();
       return {campaigns:campaigns};
  }
  render(){
    return <div>{this.props.campaigns[2]}</div>;
  }
}
export default ShowCampaigns;
