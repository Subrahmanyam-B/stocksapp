import React from 'react'
import {Line} from  'react-chartjs-2';
import Chart from 'chart.js/auto';
import { FlareSharp } from '@mui/icons-material';


function LineChart(values){
let stockChartValuesY = values.stockChartValues;
let stockChartValuesX = values.dates;
  let data  = {
   labels : stockChartValuesX,
   datasets : [
      {
         label: '',
         data :  stockChartValuesY, 
         borderColor: 'rgb(194,246,64)',
         tension: 0.4,
         pointBorderWidth : '0',
         fill: {
            target: 'origin',
            above: 'rgba(194,246,64, 0.1)',   // Area will be red above the origin
            below: 'rgb(0, 0, 255)'    // And blue below the origin
          }
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
            tension: 0.4,
            pointBorderWidth : '0',
            fill: {
               target: 'origin',
               above: 'rgb(255,50,50 , 0.1)',   // Area will be red above the origin
               below: 'rgb(0, 0, 255)'    // And blue below the origin
             }
         }
      ]
     }
   
  }

  const options = {
   responsive : true,
   aspectRatio : 2,
   maintainAspectRatio : true ,
   plugins :{
      legend: {
         display : false
      }
   },
   scales : {
      yAxes : {
         display : true,

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
   return (<><Line className='line-chart' data = {data} options = {options}/>
   </>)
}


export default LineChart