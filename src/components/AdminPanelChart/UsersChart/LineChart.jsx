import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

export default class LineChart extends Component
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
                    label:'Product',
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
           <h6 className="font-weight-bold text-center ">User's Line Chart</h6>
        <br/>
        <Line
          data={this.state.Data}
          height={120}
          
          
          options={{ maintainAspectRatio: false }}
         
          />
     </div>
      )
   }
}