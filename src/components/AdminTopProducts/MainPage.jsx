import React, { Component } from 'react'
import axios from 'axios';
import TopLessPrice from "./topLessPrice";
import RandomProducts from "./topRandomProduct";
import RecentProducts from "./topRecentProduct";
import Loading from "../LinearLoading"

export default class MainPage extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[],
            randomProduct:[],
            recentProduct:[],
            loading: true,
        }
    }

    componentDidMount(){
        axios
      .get("http://localhost:5000/adminproduct/leastprice")
      .then((res) => {
        this.setState({ products: res.data ,loading: false });
      })
      .catch((err) => {
        console.log("Error" + err);
      });


      axios
      .get("http://localhost:5000/adminproduct/toprandomproduct")
      .then((res) => {
        this.setState({ randomProduct: res.data,loading: false  });
      })
      .catch((err) => {
        console.log("Error" + err);
      });


      
      axios
      .get("http://localhost:5000/adminproduct/toprecentproduct")
      .then((res) => {
        this.setState({ recentProduct: res.data,loading: false  });
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  
    }

    ProductList=()=> {
        return this.state.products.map((currentDeal) => {
          return <TopLessPrice deal={currentDeal} key={currentDeal._id} />;
        });
      }
    

      RandomProductList=()=> {
        return this.state.randomProduct.map((currentDeal) => {
          return <RandomProducts deal={currentDeal} key={currentDeal._id} />;
        });
      }
    
      
      RecentProductList=()=> {
        return this.state.recentProduct.map((currentDeal) => {
          return <RecentProducts deal={currentDeal} key={currentDeal._id} />;
        });
      }
    render() {

        return (
            <div className="container my-5">

  {/* <!-- Section: Block Content --> */}
  <section>


    <h3 className="font-weight-bold text-center dark-grey-text pb-2 my-3">TOP 10 PRODUCTS</h3>
    <hr className="w-5  pb-2"/>

    <div className="row">

      {/* <!-- New Products --> */}
      <div className="col-lg-4 col-md-12">

        <h5 className="text-center font-weight-bold dark-grey-text mb-5">
          <strong>Top Price</strong>
        </h5>
{/* 
        <!-- Card --> */}
       {/* <Slider/> */}
      
          {this.state.loading ? (
            <div>
                <Loading />
                <br/>
              </div>
          
            
          ) : (
            <div className="row container mx-2">{this.ProductList()}</div>
          )}

      </div>
      {/* <!-- New Products -->

      <!-- Top Sellers --> */}
      <div className="col-lg-4 col-md-12">

        <h5 className="text-center font-weight-bold dark-grey-text mb-5">
          <strong>Top Recent</strong>
</h5>
       
{this.state.loading ? (
            <div>
            <Loading />
            <br/>
          </div>
          ) : (
            <div className="row container mx-2">{this.RecentProductList()}</div>
          )}

      </div>
      {/* <!-- Top Sellers -->

      <!-- Random Products --> */}
      <div className="col-lg-4 col-md-12">

        <h5 className="text-center font-weight-bold dark-grey-text mb-5">
          <strong>Random Products</strong>
        </h5>
{/* 
        <!-- Card --> */}
      {this.state.loading ? (
          <div>
          <Loading />
          <br/>
        </div>
          ) : (
            <div className="row container mx-2">{this.RandomProductList()}</div>
          )}

       
      </div>
      {/* <!-- Random Products --> */}

    </div>

  </section>
  {/* <!-- Section: Block Content --> */}

</div>
        )
    }
}
