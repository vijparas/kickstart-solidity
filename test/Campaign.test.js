const assert=require('assert');
const ganache=require('ganache-cli');
const Web3=require('web3');
const web3=new Web3(ganache.provider());

const compiledFactory=require("../ethereum/build/CampaignFactory.json");

const compiledCampaign=require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async()=>{
  accounts=await web3.eth.getAccounts();
  //deploying campaign factory to local ganache network
  factory=await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
          .deploy({data:compiledFactory.bytecode})
          .send({from:accounts[0],gas:'1000000'})

  await factory.methods.createCampaign('100').send({
    from:accounts[0],
    gas:'1000000'
  });

  const addresses=await factory.methods.getDeoloyedCampaigns().call();
  campaignAddress=addresses[0];
  campaign=await new web3.eth.Contract(JSON.parse(compiledCampaign.interface),campaignAddress);
});
  describe('Campaign Contract',()=>{
// it is the the test that will be executed
  it('test deployment',()=>{
    //checks if contract deployed has an address attached to it
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });
  it('the creater of campaign should be the manager of contract',async()=>{
      const manager=await campaign.methods.manager().call();
      assert.equal(manager,accounts[0]);
  })
  it('allow people to contribute money and mark them as approvers',async()=>{
      await campaign.methods.contribute().send({
        from:accounts[1],
        value:'200'
      });
      // here we are calling the approvers method. approvers was a mapping with (addresss=>bool) so if address
      // is an approver it will return true otherwise false. Mappings always does checking in constant time
      //as it works on hash.

      const isApprover=await campaign.methods.approvers(accounts[1]).call();
      assert(isApprover);
  });

  it('requires minimum contribution',async()=>{
    try{
      await campaign.methods.contribute().send({
        from:accounts[2],
        value:'89'
      })
    }
    catch(error){
      assert(error);
    }
  });

  it('allows manager of campaign to create request',async()=>{
    await campaign.methods.createRequest(
      'this is a test request','300',accounts[3]

  ).send({
      'from':accounts[0],
      'gas':'1000000'
    })
     var request=await campaign.methods.requests('0').call();
     assert(request);
  });
  it('end to end test',async()=>{
    await campaign.methods.contribute().send({
      'from':accounts[3],
      'value':web3.utils.toWei('10','ether')
    });
    const isApprover=await campaign.methods.approvers(accounts[3]).call();
    assert(isApprover);
    await campaign.methods
    .createRequest('Another test for checking if request is created',web3.utils.toWei('5','ether'),accounts[1]).send({
      'from':accounts[0],
      'gas':'1000000'
    });
    var requests=await campaign.methods.requests(0).call();
    assert.equal(requests.description,'Another test for checking if request is created');
    assert.equal(requests.recipient,accounts[1])
    console.log(requests.recipient);
    await campaign.methods.approveRequest(0).send({
      'from':accounts[3],
      'gas':'100000'
    });
    let intialBalance=await web3.eth.getBalance(accounts[1]);
    intialBalance=web3.utils.fromWei(intialBalance,'ether');
    intialBalance=parseFloat(intialBalance);
  await campaign.methods.finalizeRequest(0).send({
    'from':accounts[0],
    'gas':'1000000'
  });
  let finalBalance=await web3.eth.getBalance(accounts[1]);
  finalBalance=web3.utils.fromWei(finalBalance,'ether');
  finalBalance=parseFloat(finalBalance);
  assert(finalBalance>intialBalance);




  });
});
