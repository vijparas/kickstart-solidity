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
    const approversCount=await campaign.methods.approversCount().call();
    console.log(requestCount)
    // requests are stored as array of structures however solidity cannot
    // return array of structures so we need to fetch request one by one
    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );
    //const contractSummary = await campaign.methods.getContractSummary().call();

    return {
      address: props.query.address,
      requestCount: requestCount,
      requests: requests,
      approversCount:approversCount
    };
    // const contractSummary = await factory.methods.getContractSummary().call();
    // return { contractSummary: contractSummary };
  }

  displayRequests() {

    return this.props.requests.map((request,index)=>{
      return <RequestRow
      key={index}
      id={index}
      request={request}
      approversCount={this.props.approversCount}
      address={this.props.address} />
    })
  }
  render() {
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{marginBottom:'5px'}}>Add New Request</Button>
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
    <div>
    Found {this.props.requestCount} Requests
    </div>

      </Layout>
    );
  }
}
export default CampaignRequests;
