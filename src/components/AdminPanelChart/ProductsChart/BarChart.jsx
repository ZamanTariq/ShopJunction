import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

export default class BarChart extends Component
{
   constructor(props) {
      super(props);
      this.state = {
        Data: {},
        Product:[]
        
      }
    }
       
    componentDidMount() {
      axios.get(`http://localhost:5000/adminProduct/CategoryCounter`)
        .then(res => {
          console.log(res)
          const data = res.data;
         
         
          this.setState({ 
            Data: {
              labels: ['Electroic Devices','Electronic Accessories','TV & Home Appliances','Health & Beauty',
              'Babies & Toys','Groceries & Pets','Home & Lifestyle','Women Fashion','Men Fashion','Watches, Bags & Jewelery'
              ,'Sports & Outdoor','Automotive & Motorbike'],
              datasets:[
                 {
                    label:'Our Product',
                    data: data ,
                    backgroundColor:[
                      '#F39C12',
                      '#8E44AD',
                      '#000080',
                      '#008000',
                      '#008080',
                      '#FF0000',
                      '#BBC818',
                      '#0CCCCE',
                      '#C709C9',
                      '#C70039',
                      '#FFC300',
                      '#FFE300',
                  ]
                 }
              ]
           }
           });
        })
    }
 render()
   {
      return(
        <div className="container" style={{height:"60vh"}}>
        <h6 className="font-weight-bold text-center ">Product's Bar Chart</h6>
              <br/>
              <Bar
                data={this.state.Data}
                options={{ maintainAspectRatio: false }}/>
           </div>
      )
   }
}