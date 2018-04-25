import React,{Component} from 'react';
import Layout from '../../components/Layout'
import {Form,Button,Input,Message} from 'semantic-ui-react'
import CampaignFactory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import {Router} from '../../routes.js'
class CampaignNew extends Component{
  state={
    'minimumContribution':'',
    'error':'',
    'loading':false
  }
  onSubmit=async (event)=>{
    this.setState({'loading':true,'err':''})
    try{
      event.preventDefault();
      const accounts=await web3.eth.getAccounts()
      await CampaignFactory.methods
      .createCampaign(this.state.minimumContribution)
      .send({
        from:accounts[0]
      })
      Router.pushRoute('/');
    }
    catch(err){
        this.setState({'err':err.message})
    }
    this.setState({'loading':false,})

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
    <Button type='submit' primary loading={this.state.loading}>Create</Button>
  </Form>

      </Layout>
    );
  }
}
export default CampaignNew;
