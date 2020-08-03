import React, { Component } from 'react'
import { Empty,Button } from 'antd';
import { withRouter } from 'react-router-dom';
 class EmptyCart extends Component {
    render() {
        return (
            <div className="mb-3 container" >
                <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 80,
      
    }}
    description={
      <span>
        I think You forget to add item's into Favourite
      </span>
    }
  >
   
  </Empty>
            </div>
        )
    }
}
export default withRouter(EmptyCart)