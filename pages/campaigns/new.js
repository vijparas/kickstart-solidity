import React,{Component} from 'react';
import Layout from '../../components/Layout'
import {Form,Button,Input} from 'semantic-ui-react'
class CampaignNew extends Component{
  state={
    'minimumContribution':''
  }
  render(){
    return (
      <Layout>
      <h3>Create Campaign</h3>
      <Form>
    <Form.Field>
      <label>Minimum Contribution</label>
      <Input label="wei" labelPosition="right"
       placeholder="Minimum Contribution" value={this.state.minimumContribution} onChange={event=>this.setState({minimumContribution:event.target.value})} />
    </Form.Field>

    <Button type='submit' primary>Submit</Button>
  </Form>
    
      </Layout>
    );
  }
}
export default CampaignNew;
