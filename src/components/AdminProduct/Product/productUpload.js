import React, { Component } from 'react'
import axios from "axios";

export default class productUpload extends Component {
    constructor(props){
        super(props);
        this.onChangeTitle=this.onChangeTitle.bind(this);
        this.onChangeImage=this.onChangeImage.bind(this);
        this.onChangePrice=this.onChangePrice.bind(this);
        this.onChangeCompany=this.onChangeCompany.bind(this);
        this.onChangeInfo=this.onChangeInfo.bind(this);
        this.onChangeInCart=this.onChangeInCart.bind(this);
        this.onChangeCount=this.onChangeCount.bind(this);
        this.onChangeTotal=this.onChangeTotal.bind(this);
        this.onPostSubmit=this.onPostSubmit.bind(this);
        this.state={
        title:'',
        image:'',
        price:'',
        company:'',
        info:'',
        inCart:'',
        count:'',
        total:'',
            
            products:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:5000/uploadproduct/")
        .then(response=>{
            this.setState({
              products:response.data.map(product => product)
            })
        
        })
      }

      onChangeTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    onChangeImage = e=>{
        this.setState({
            image: e.target.files[0]
        })
    }

    onChangePrice(e){
        this.setState({
            price: e.target.value
        })
    }

    onChangeCompany(e){
        this.setState({
            company: e.target.value
        })
    }

    onChangeInfo(e){
        this.setState({
            info: e.target.value
        })
    }

    onChangeInCart(e){
        this.setState({
            inCart: e.target.value
        })
    }

    onChangeCount(e){
        this.setState({
            count: e.target.value
        })
    }

    onChangeTotal(e){
        this.setState({
            total: e.target.value
        })
    }

    onPostSubmit(e){
        e.preventDefault();
        const fd= new FormData();
       fd.append('image',this.state.image,this.state.image.name)
        const exercise={
            //Modification There//
            title:this.state.title,
            image:this.state.image.name,
            price:this.state.price,
            company:this.state.company,
            info:this.state.info,
            inCart:this.state.inCart,
            count:this.state.count,
            total:this.state.total
            
            
        }
        console.log(exercise)
 //////------------------------------------------//////
        //connection of backend of Exercise//
        
        axios.post("http://localhost:5000/uploadproduct/",exercise)
        .then(res=>console.log(res.data))
        .catch(err=>console.log("Error is"+err))
 
        // this.props.history.push('/delete-deal')
       
     }


    render() {
        
        return (
            <div>
            <h3>Upload Deal</h3>
            <form onSubmit={this.onPostSubmit} method="post" encType="multipart/form data">
              
              <div className="form-group"> 
                <label className="col-md-3 control-label">Title</label>
                <input  type="text"
                    required
                    className="form-control"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    />
              </div>
              <div className="form-group"> 
              <label className="col-md-3 control-label">Image</label>
                <input  type="file"
                    required
                    className="form-control"
                    name="image"
                    value={this.state.image}
                    onChange={this.onChangeImage}
                    />
              </div>

              <div className="form-group"> 
                <label className="col-md-3 control-label">Price </label>
                <input  type="text"
                    required
                    className="form-control"
                    name="price"
                    value={this.state.price}
                    onChange={this.onChangePrice}
                    />
              </div>

              <div className="form-group"> 
                <label className="col-md-3 control-label">Company </label>
                <input  type="text"
                    required
                    className="form-control"
                    name="company"
                    value={this.state.company}
                    onChange={this.onChangeCompany}
                    />
              </div>

              <div className="form-group"> 
                <label className="col-md-3 control-label">Info </label>
                <input  type="text"
                    required
                    className="form-control"
                    name="info"
                    value={this.state.info}
                    onChange={this.onChangeInfo}
                    />
              </div>

              <div className="form-group"> 
                <label className="col-md-3 control-label">In Cart </label>
                <input  type="text"
                    required
                    className="form-control"
                    name="inCart"
                    value={this.state.inCart}
                    onChange={this.onChangeInCart}
                    />
              </div>

              <div className="form-group"> 
                <label className="col-md-3 control-label">Count </label>
                <input  type="text"
                    required
                    className="form-control"
                    name="count"
                    value={this.state.count}
                    onChange={this.onChangeCount}
                    />
              </div>

              <div className="form-group"> 
                <label className="col-md-3 control-label">Total </label>
                <input  type="text"
                    required
                    className="form-control"
                    name="total"
                    value={this.state.total}
                    onChange={this.onChangeTotal}
                    />
              </div>

           
      
              <div className="form-group">
                <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}
