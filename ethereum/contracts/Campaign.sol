pragma solidity ^0.4.17;
contract CampaignFactory{
    address[] public deployedCampaigns;
    function createCampaign(uint minimumContribution) public{
    address newCampaignAddress= new Campaign(minimumContribution,msg.sender);
    deployedCampaigns.push(newCampaignAddress);
    }
    function getDeoloyedCampaigns() public view returns(address[]){
        return deployedCampaigns;
    }
}
contract Campaign{
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        mapping(address=>bool) approvers;
        uint approversCount;

    }
    address public manager;
    uint public minimumContribution;
 //   address[] public approvers;``
 //refracting to mapping
    mapping(address=>bool) public approvers;
    uint public approversCount;
    Request[] public requests;
    modifier restricted(){
        require(msg.sender==manager);
        _;
    }
    function Campaign(uint minimum,address sender) public{
        manager=sender;
        minimumContribution=minimum;

    }
    function contribute() public payable{
        require(msg.value>minimumContribution);
        approvers[msg.sender]=true;
        approversCount++;
    }
    function createRequest(string description,uint value,address recipient)public restricted{
    // we dont have to add approvers in struct as it is of reference type
        Request memory newRequest=Request({
            description:description,
           value:value,
           recipient:recipient,
           complete:false,
           approversCount:0
        });
        requests.push(newRequest);
    }
    function approveRequest(uint requestIndex){
        require(approvers[msg.sender]);
        require(!requests[requestIndex].approvers[msg.sender]);
        requests[requestIndex].approversCount++;
        requests[requestIndex].approvers[msg.sender]=true;
    }
    function finalizeRequest(uint requestIndex)restricted public{
        Request storage request=requests[requestIndex];
        require(!request.complete);
        require(request.approversCount>approversCount/2);
        request.complete=true;
        request.recipient.transfer(request.value);
    }

    /* This function returns summary of our campaign*/
    function getContractSummary() public view returns(uint ,uint ,uint ,uint ,address ){
        return(
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCounts() public view returns(uint){
      return requests.length;
    }

   }
