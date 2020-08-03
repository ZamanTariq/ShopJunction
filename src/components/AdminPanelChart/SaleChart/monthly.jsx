import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

export default class MonthlyStat extends Component
{
   constructor(props) {
      super(props);
      this.state = {
        Data: {},
        Product:[]
        
      }
    }
       
    componentDidMount() {
      axios.get(`http://localhost:5000/deliverdOrder/monthly`)
        .then(res => {
          
          const data = [res.data[0].total,res.data[1].total,res.data[2].total];
          const label=[res.data[0]._id.month,res.data[1]._id.month,res.data[2]._id.month]
        //   console.log(data+""+label)
         
         
          this.setState({ 
              Product:res,  
              
            Data: {
              labels: label,
              datasets:[
                 {
                    label:'Our Product',
                    data: data ,
                    backgroundColor:[
                      '#F39C12',
                       'red',
                       'purple'
                      
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
        <div className="container my-5" style={{height:"60vh"}}>
        <h6 className="font-weight-bold text-center ">Product's Bar Chart</h6>
              <br/>
{
    console.log(this.state.Product.data[0].total),
    this.state.Product.map(res=>{
      
        let data=[]
        for(var i in res) {
            data.push('0');
        }
        
       
    })
}
              
              <Bar
                data={this.state.Data}
                options={{ maintainAspectRatio: false }}/>
           </div>
      )
   }
}