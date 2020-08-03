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
      axios.get(`http://localhost:5000/newmerchant/UserCounter`)
        .then(res => {
          console.log(res)
          const data = res.data;
         
         
          this.setState({ 
            Data: {
              labels: ['Merchant','User','Admin'],
              datasets:[
                 {
                    label:'Our Users',
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
        <div className="container "  style={{height:"60vh"}}> 
        <h6 className="font-weight-bold text-center ">User's Bar Chart</h6>
        <br/>
        <Bar
          data={this.state.Data}
         
          options={{ maintainAspectRatio: false }}
           />
     </div>
      )
   }
}