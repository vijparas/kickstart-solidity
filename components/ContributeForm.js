import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import {Router} from '../routes';
class ContributeForm extends Component {
  state = {
    error: "",
    loading: false,
    contribution: ""
  };

  onSubmit = async event => {
    this.setState({ loading: true, err: "" });
    try {
      event.preventDefault();

      const campaign = Campaign(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.contribution, "ether")
      });
      //Refresh the show component
      Router.replaceRoute(`/campaigns/${this.props.address}`)
    } catch (err) {
      console.log(err.message);
      this.setState({ error: err.message });
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit} error={!!this.state.err}>
          <Form.Field>
            <label>Contribute</label>
            <Input
              label="ether"
              labelPosition="right"
              placeholder="Contribute"
              value={this.state.contribution}
              onChange={event =>
                this.setState({ contribution: event.target.value })
              }
            />
          </Form.Field>
          <Message
            error
            header="OOPS Something went wrong"
            content={this.state.err}
          />
          <Button type="submit" primary loading={this.state.loading}>
            Contribute
          </Button>
        </Form>
      </div>
    );
  }
}
export default ContributeForm;
