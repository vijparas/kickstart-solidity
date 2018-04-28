import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Button } from "semantic-ui-react";
import {Link} from '../../../routes'
import Campaign from '../../../ethereum/campaign'
import { Router } from "../../../routes.js";
class CampaignRequests extends Component {
  static async getInitialProps(props) {
    // calling the function defindd in campaign.js
    const campaign = Campaign(props.query.address);
    const requestCount= await campaign.methods.getRequestsCounts().call();
    // requests are stored as array of structures however solidity cannot
  // return array of structures so we need to fetch request one by one
    const requests=await Promise.all(
      Array(parseInt(requestCount).fill()
      .map((element,index)=>{
        return campaign.methods.requests(index).call();
      })
    )

    //const contractSummary = await campaign.methods.getContractSummary().call();

    return {
      address: props.query.address,
      requestCount:requestCount,
      requests:requests
    };
    // const contractSummary = await factory.methods.getContractSummary().call();
    // return { contractSummary: contractSummary };
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
      </Layout>
    );
  }
}
export default CampaignRequests;
