import React,{Component} from 'react';
import factory from'../ethereum/factory';
import {Card} from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';
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
  renderCampaigns(){

    const campaigns=this.props.campaigns.map(address=>{
      return {
        header:address,
        description:<a>View Campaign</a>,
        fluid:true
      }
    });
    return <Card.Group items={campaigns} />;
  }
  render(){
    return <div>
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
    {this.renderCampaigns()}
      <Button content='Create Campaign' icon='add circle' primary />
      </div>
  }
}
export default ShowCampaigns;
