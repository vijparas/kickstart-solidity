import React,{Component} from 'react';
import Layout from '../../components/Layout'
import {Form,Button,Input,Message} from 'semantic-ui-react'
import CampaignFactory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
class CampaignNew extends Component{
  state={
    'minimumContribution':'',
    'error':''
  }
  onSubmit=async (event)=>{
    try{
      event.preventDefault();
      const accounts=await web3.eth.getAccounts()
      await CampaignFactory.methods
      .createCampaign(this.state.minimumContribution)
      .send({
        from:accounts[0]
      })
    }
    catch(err){
        this.setState({'err':err.message})
    }

  }
  render(){
    return (
      <Layout>
      <h3>Create Campaign</h3>
      <Form onSubmit={this.onSubmit} error={!!this.state.err}>
    <Form.Field >
      <label>Minimum Contribution</label>
      <Input label="wei" labelPosition="right"
       placeholder="Minimum Contribution" value={this.state.minimumContribution} onChange={event=>this.setState({minimumContribution:event.target.value})} />
    </Form.Field>
    <Message error header="OOPS Something went wrong" content={this.state.err} />
    <Button type='submit' primary >Create</Button>
  </Form>

      </Layout>
    );
  }
}
export default CampaignNew;
