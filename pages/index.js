import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";
class ShowCampaigns extends Component {
  //next doesnot execute componentDidMount function on server side
  // async componentDidMount(){
  //
  //  //console.log(campaigns);
  // }
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeoloyedCampaigns().call();
    return { campaigns: campaigns };
  }
  renderCampaigns() {
    const campaigns = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={campaigns} />;
  }
  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a className="item">
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}
export default ShowCampaigns;
