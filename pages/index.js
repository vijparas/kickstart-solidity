import React,{Component} from 'react';
import factory from'../ethereum/factory';
import {Card} from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';
import Layout from '../components/Layout'
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
    return (
      <Layout >
      <div>

  <h3>Open Campaigns</h3>
    <Button floated="right" content='Create Campaign' icon='add circle' primary />
    {this.renderCampaigns()}

      </div>
      </Layout>
  )}
}
export default ShowCampaigns;
