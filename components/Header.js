import React from 'react'
import { Menu } from 'semantic-ui-react'
export default ()=>{
  return(
    <Menu>
    <Menu.Item name='signup'>
     CrowdCoin
    </Menu.Item>
        <Menu.Menu position='right'>
         <Menu.Item name='signup'>
          Campaigns
         </Menu.Item>

         <Menu.Item >
          +
         </Menu.Item>
       </Menu.Menu>
     </Menu>
  )
}
