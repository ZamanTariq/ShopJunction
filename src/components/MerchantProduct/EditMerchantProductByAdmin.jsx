// edit.component.js

import React, { Component } from "react";
import axios from "axios";
import Title from "../Title";

export default class EditMerchantProductByAdmin extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeOldPrice = this.onChangeOldPrice.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeInfo = this.onChangeInfo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      image: '',
      category:'Electronic Devices',
      rating:'',
      oldprice:'',
      price:'',
      company:'',
      info:'',
      inCart:false,
      count:0,
      total:0,
    }
  }

  componentDidMount() {
      axios.get('http://localhost:5000/merchantproduct/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
      title: response.data.title,
      image: response.data.image,
      category: response.data.category,
      rating:response.data.rating,
      oldprice:response.data.oldprice,
      price: response.data.price,
      company: response.data.company,
      info: response.data.info,
      inCart: response.data.inCart,
      count: response.data.count,
      total: response.data.total });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangeTitle(e) {
      this.setState({
        title: e.target.value
      });
    }
    onChangeImage(e) {
      this.setState({
        image: e.target.value
      })  
    }
    onChangeCategory(e) {
      this.setState({
        category: e.target.value
      })
    }
    onChangeRating(e) {
      this.setState({
        rating: e.target.value
      })
    }
    onChangeOldPrice(e) {
      this.setState({
        oldprice: e.target.value
      })
    }
    onChangePrice(e) {
      this.setState({
        price: e.target.value
      })
    }
    onChangeCompany(e) {
      this.setState({
        company: e.target.value
      })
    }
    onChangeInfo(e) {
      this.setState({
        info: e.target.value
      })
    }
  

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      image: this.state.image,
      category: this.state.category,
      rating:this.state.rating,
      oldprice:this.state.oldprice,
      price: this.state.price,
      company: this.state.company,
      info: this.state.info,
      inCart: this.state.inCart,
      count: this.state.count,
      total: this.state.total
    };
    axios
      .post(
        "http://localhost:5000/merchantproduct/update/" +
          this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push("/index-admin-product");
  }

  render() {
    return (
      <div className="container">
       
        
            
      
            {Title("Update", "Merchant Product")}
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                    <label>Title:  </label>
                    <input 
                    
                      type="text" 
                      className="form-control text-capitalize" 
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      />
                </div>
                <div className="form-group">
                    <label>Image: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.image}
                      onChange={this.onChangeImage}
                      />
                </div>
                <div className="form-group">
                    <label>Category: </label>
                    <select 
                      className="form-control"
                      value={this.state.category}
                      onChange={this.onChangeCategory}
                      >
                      <option value="Electronic Devices">Electronic Devices</option>
                      <option value="Electronic Accessories">Electronic Accessories</option>
                      <option value="TV & Home Appliances">TV & Home Appliances</option>
                      <option value="Health & Beauty">Health & Beauty</option>
                      <option value="Babies & Toys">Babies & Toys</option>
                      <option value="Groceries & Pets">Groceries & Pets</option>
                      <option value="Home & Lifestyle">Home & Lifestyle</option>
                      <option value="Women Fashion">Women Fashion</option>
                      <option value="Men Fashion">Men Fashion</option>
                      <option value="Watches, Bags & Jewelery">Watches, Bags & Jewelery</option>
                      <option value="Sports & Outdoor">Sports & Outdoor</option>
                      <option value="Automotive & Motorbike">Automotive & Motorbike</option>


                      </select>
                </div>
                <div className="form-group">
                    <label>Rating/%Off: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.rating}
                      onChange={this.onChangeRating}
                      />
                </div>
                <div className="form-group">
                    <label>Old Price: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.oldprice}
                      onChange={this.onChangeOldPrice}
                      />
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.price}
                      onChange={this.onChangePrice}
                      />
                </div>
                <div className="form-group">
                    <label>Company: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.company}
                      onChange={this.onChangeCompany}
                      />
                </div>
                <div className="form-group">
                    <label>Info: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.info}
                      onChange={this.onChangeInfo}
                      />
                </div>
               
                <div className="form-group">
                    <input type="submit" 
                      value="Update Product" 
                      className="btn btn-primary"/>
                </div>
            </form>
          </div>
  
    );
  }
}
