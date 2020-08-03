
import React, { Component } from 'react';
import axios from 'axios';
import Title from "../../../Title"
import jwt_decode from "jwt-decode";
import {orderPlacementMessage,cartUpdated, OutOfStock} from '../../../notificationMessages'
import { Modal, Button } from 'antd';
import EmptyCart from "./EmptyCart"


export default class MerchantCart extends Component {

  constructor(props) {
      super(props);
      this.state = {
        cart: [],
        loading: false,
    visible: false,
      };
    }
    showModal = (cart) => {
        if(cart.quantity>cart.stock){
            OutOfStock()
        }else{
      this.setState({
        visible: true,
      });
    }
    };
  
    handleOk = () => {
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: false, visible: false });
      }, 3000);
    };
  
    handleCancel = () => {
      this.setState({ visible: false });
    };

getUserId (){
      const token=localStorage.usertoken
      const decoded=jwt_decode(token)
      this.setState({
          userId:decoded._id 
      })
     return decoded._id
    }

componentDidMount(){
      axios.get('http://localhost:5000/addtocart/'+this.getUserId())
        .then(response => {          
          this.setState({ cart: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
   

handleDelete=cart=> {
      const carts = this.state.cart.filter(m => m._id !== cart._id);
      this.setState({ cart:carts });
      axios.get('http://localhost:5000/addtocart/delete/'+cart._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
    };

handleIncrement=(index, newValue)=>{
      //copy the array first
     const updatedArray = [...this.state.cart];
     updatedArray[index].quantity = newValue;
     updatedArray[index].totalPrice=newValue*updatedArray[index].price
     this.setState({
          cart: updatedArray,
      });
  }
handleDecrement=(index, newValue)=>{
    //copy the array first
   const updatedArray = [...this.state.cart];
   updatedArray[index].quantity = newValue;
   updatedArray[index].totalPrice=newValue*updatedArray[index].price
   this.setState({
        cart: updatedArray,
    });
}

updateAddress(index, newValue) {
   const updatedArray = [...this.state.cart];
   updatedArray[index].userAddress = newValue;
   this.setState({
        cart: updatedArray,
    });
}
    
handleSubmit=cart=>{
    if(cart.quantity>cart.stock){
        OutOfStock()
    }else{
        try {
            axios.post('http://localhost:5000/order/',cart)
.then(res => console.log(res.data))
.catch(err => console.log(err))
const obj={
  stock:cart.quantity
}
axios.post('http://localhost:5000/merchantproduct/updateStock/'+cart.productId,obj)
.then(res => console.log(res.data),orderPlacementMessage(),this.handleDelete(cart))
.catch(err => console.log(err))
            
        } catch (error) {
            console.log(error)
            
        }



    }
  }
  
  

 

handleUpdate=carts=> {
      axios.post('http://localhost:5000/addtocart/update/'+carts._id,carts)
          .then(res => {cartUpdated()})
          .catch(err => console.log(err))
    }



    render() {
      const { visible, loading } = this.state;
      return (
        <div className="container">
          
        
         
        
   
     


        
          
          <div className="container table-responsive mb-4 mx-2 ">
            <table className="table  table-striped table-md " >
            
          <tbody>
            
          {this.state.cart.map((carts,index) => (
          
         
            <tr key={carts._id}  >
            
              <td>{carts.title}</td>
              <td><img src={"/Upload/"+carts.image}  alt='cart' width="40px" height="40px"/></td>
              <td>{carts.price}</td>
              <td><button  key={carts} disabled={carts.quantity<=1} onClick={e =>this.handleDecrement(index,carts.quantity-1)}    className="btn btn-primary btn-sm">-</button>
              <span className="badge badge-warning  m-2 text-muted"><h6>{carts.quantity}</h6></span>
                <button key={carts} disabled={ carts.quantity===12}  onClick={e =>this.handleIncrement(index,carts.quantity+1)}  className="btn btn-primary btn-sm">+</button>
             </td>
              <td>{carts.totalPrice}</td>
              
              <td>
                <button
                onClick={() => this.handleUpdate(carts)}
                  className="btn btn-secondary btn-sm"
                >
                  Save
                </button>
              </td>
              <td>
              <button
              onClick={() => this.handleDelete(carts)}
                className="btn btn-danger btn-sm "
              >
                Delete
              </button>
            </td>
            <td>
        <Button type="button" className="btn btn-success btn-sm text-white" onClick={()=>this.showModal(carts)}>
          Check Out
        </Button>
        <Modal
          visible={visible}
          title="CHECK OUT"
        
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={() => this.handleSubmit(carts)}>
             Confirm
            </Button>,
          ]}
        >
  

<div className="card card-cascade wider">

  
  <div className="view view-cascade overlay">
    <img className="card-img-top" src={"/Upload/"+carts.image} height="200vh" alt="Card image cap"/>
   
  </div>

 
  <div className="card-body card-body-cascade text-center pb-0">

  
    <h4 className="card-title orange-text"><strong>{carts.title}</strong></h4>
    <hr/>
    <h5 className=" pb-2"><strong>Quantity: {carts.quantity}</strong></h5>
    <hr/>
    <h5 className="blue-text pb-2"><strong>Total Payment: {carts.totalPrice}</strong></h5>
    <div className="form-group">
    <input
                  type="text"
                  className= "form-control"
                  name="address"
                value={carts.userAddress}
                key={carts}   onChange={e => this.updateAddress(index, e.target.value)}
                />
    </div>

    <div className="card-footer text-muted text-center mt-4">
      Thanks For Shopping !
    </div>

  </div>

</div>

       
      
        </Modal>
          </td>
          <td>{carts.stock}</td>
            </tr>
          ))}
        </tbody>
          
        </table>
        </div>
          
          
       

        
        



        </div>
      );
    }
  }

  