import React, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Card } from "semantic-ui-react";
import web3 from 'web3'
class CampaignShow extends Component {
  // this function will ba called intially
  // the address that we are sending as wildcard in out url
  // can be captured using props.
  static async getInitialProps(props) {
    // calling the function defindd in campaign.js
    const campaign = Campaign(props.query.address);
    const contractSummary = await campaign.methods.getContractSummary().call();

    return {
      address: props.query.address,
      minimumContribution: contractSummary[0],
      balance: contractSummary[1],
      request: contractSummary[2],
      approversCount: contractSummary[3],
      manager: contractSummary[4]
    };
    // const contractSummary = await factory.methods.getContractSummary().call();
    // return { contractSummary: contractSummary };
  }
  renderCards() {
    console.log(this.props);
    const {
      minimumContribution,
      balance,
      request,
      approversCount,
      manager
    } = this.props;
    const items = [
      {
        header: manager,
        description: 'This is address of the individual who has created campaign',
        meta: "Campaign manager",
        style:{overflowWrap:'break-word'}

      },
      {
        header: web3.utils.fromWei(balance,'ether') +' (ether)',
        description: 'Total Amount Presently in Campaign (wei)',
        meta: "Campaign Pool",
        style:{overflowWrap:'break-word'}

      },
      {
        header: approversCount,
        description: 'Number of people who have contributed to campaign',
        meta: "Approvers Count",
        style:{overflowWrap:'break-word'}

      },
      {
        header: request,
        description: 'Number of request pending for approval',
        meta: "Pending Request",
        style:{overflowWrap:'break-word'}

      },
      {
        header: minimumContribution +' (wei)',
        description: 'Minimum Contribution required to become approver',
        meta: "Minimum Contribution",
        style:{overflowWrap:'break-word'}

      }
    ];

    return <Card.Group items={items} />;
  }
  render() {
    return <Layout>{this.renderCards()}</Layout>;
  }
}
export default CampaignShow;
