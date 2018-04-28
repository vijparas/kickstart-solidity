import React,{Component} from 'react'
import {Table} from 'semantic-ui-react'
import web3 from '../ethereum/web3'
class RequestRow extends Component{
    static async getInitialProps(props) {

    }
  render(){
    const {Row,Cell}=Table;
    const request=this.props.request;
    return (
      <Row>
        <Cell>{this.props.id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>{request.approversCount}/{this.props.approversCount}</Cell>
  </Row>
    )
  }
}
export default RequestRow;
