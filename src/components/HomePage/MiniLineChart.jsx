import React from 'react'
import {Line} from  'react-chartjs-2';
import Chart from 'chart.js/auto';
import { FlareSharp } from '@mui/icons-material';


function MiniLineChart(values){
let stockChartValuesY = values.stockChartValues;
let stockChartValuesX = values.dates;
   console.log(stockChartValuesX);
  let data  = {
   labels : stockChartValuesX,
   datasets : [
      {
         label: '',
         data :  stockChartValuesY, 
         borderColor: 'rgb(194,246,64)',
         tension: 0.1,
         pointBorderWidth : '0',
      }
   ]
  }

  if (stockChartValuesY[0]>stockChartValuesY[63]){
    data  = {
      labels : stockChartValuesX,
      datasets : [
         {
            label: '',
            data :  stockChartValuesY, 
            borderColor: 'rgb(255,50,50)',
            tension: 0.1,
            pointBorderWidth : '0',
         }
      ]
     }
  }

  const options = {
   elements :{
      line :{
         borderWidth : 2,
      }
   },
   responsive : true,
   aspectRatio : 1,
   maintainAspectRatio : true ,
   plugins :{
      legend: {
         display : false
      }
   },
   scales : {
      yAxes : {
         display : false,

         ticks : {
         },
         grid : {
            display : false
         }
      },
      xAxes : {
         display : false,
         grid : {
            display : false
         }
      }
   }
  }
   return <Line className='line-chart' data = {data} options = {options}/>
}


export default MiniLineChart