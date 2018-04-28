import React,{Component} from 'react'
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/web3'
import Campaign from '../../../ethereum/campaign'
import {Router,Link} from '../../../routes.js'
class NewRequest extends Component{

  state={
    'description':'',
    'amount':'',
    'recipient':'',
    'error':'',
    'loading':false
  }
  static async getInitialProps(props) {
    // calling the function defindd in campaign.js
    // const campaign = Campaign(props.query.address);
    // const contractSummary = await campaign.methods.getContractSummary().call();

    return {
      address: props.query.address,

    };
  }

  onSubmit = async event => {
    this.setState({ loading: true, err: "" });
    try {
      event.preventDefault();

      const campaign = Campaign(this.props.address);
      const accounts = await web3.eth.getAccounts();
      const {description,recipient,amount}=this.state;
      alert(recipient);
      await campaign.methods.createRequest(description,
        web3.utils.toWei(amount,'ether'),recipient).send({
        from: accounts[0],

      });
      //Refresh the show component
      //Router.replaceRoute(`/campaigns/${this.props.address}`)
    } catch (err) {

      this.setState({ error: err.message });
    }
    this.setState({ loading: false });
  };
  render(){
    return (
      <Layout>
      <h3>Create Request</h3>
      <Link route={`/campaigns/${this.props.address}/requests`}>
        <a>
          <Button primary>Back</Button>
        </a>
      </Link>
      <Form onSubmit={this.onSubmit} error={!!this.state.error}>
        <Form.Field>
          <label>Description</label>
          <Input
            label="Description"
            labelPosition="right"
            placeholder="Description"
            value={this.state.description}
            onChange={event =>
              this.setState({ description: event.target.value })
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Amount</label>
          <Input
            label="ether"
            labelPosition="right"
            placeholder="Amount of ether Required"
            value={this.state.amount}
            onChange={event =>
              this.setState({ amount: event.target.value })
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Receipent</label>
          <Input
            label="Address"
            labelPosition="right"
            placeholder="Address Of Receipent"
            value={this.state.recipient}
            onChange={event =>
              this.setState({ recipient: event.target.value })
            }
          />
        </Form.Field>

        <Message
          error
          header="OOPS Something went wrong"
          content={this.state.error}
        />
        <Button type="submit" primary loading={this.state.loading}>
          Create Request
        </Button>
        </Form>

      </Layout>
    )
  }
}
export default NewRequest
