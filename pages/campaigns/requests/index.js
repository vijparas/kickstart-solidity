import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Campaign from "../../../ethereum/campaign";
import { Router } from "../../../routes.js";
import RequestRow from "../../../components/RequestRow"
class CampaignRequests extends Component {
  static async getInitialProps(props) {
    // calling the function defindd in campaign.js
    const campaign = Campaign(props.query.address);
    const requestCount = await campaign.methods.getRequestsCounts().call();
    // requests are stored as array of structures however solidity cannot
    // return array of structures so we need to fetch request one by one
    const requests = await Promise.all(
      Array(requestCount)
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );
    //const contractSummary = await campaign.methods.getContractSummary().call();

    return {
      address: props.query.address,
      requestCount: requestCount,
      requests: requests
    };
    // const contractSummary = await factory.methods.getContractSummary().call();
    // return { contractSummary: contractSummary };
  }

  displayRequests() {
    return this.props.requests.map((request,index)=>{
      return <RequestRow
      key={index}
      request={request}
      address={this.props.address} />
    })
  }
  render() {
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add New Request</Button>
          </a>
        </Link>

        <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>ID</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Recipient</Table.HeaderCell>
        <Table.HeaderCell>Approval Count</Table.HeaderCell>
        <Table.HeaderCell>Approve</Table.HeaderCell>
        <Table.HeaderCell>Finalize</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

       <Table.Body>
       {this.displayRequests()}
       </Table.Body>
    </Table>


      </Layout>
    );
  }
}
export default CampaignRequests;
