import React, { Component } from 'react';
import {Polar} from 'react-chartjs-2';
import axios from 'axios';

export default class PolarChart extends Component
{
   constructor(props) {
      super(props);
      this.state = {
        Data: {},
        Product:[]
      }
    }
       
    componentDidMount() {
      axios.get(`http://localhost:5000/newmerchant/UserCounter`)
        .then(res => {
          console.log(res)
          const data = res.data;
         
         
          this.setState({ 
            Data: {
              labels: ['Merchants','Users','Admins'],
              datasets:[
                 {
                    label:'Product Category',
                    data: data ,
                    backgroundColor:[
                     '#F39C12',
                     '#8E44AD',
                     '#000080',
                    
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
         <h6 className="font-weight-bold text-center ">User's Polar Chart</h6>
               <br/>
               <Polar
                 data={this.state.Data}
                 options={{ maintainAspectRatio: false }}/>
            </div>
     
      )
   }
}