import * as React from "react";

import Chart from "./Chart";
import { Typography } from "@mui/material";
import StockList from "./StockList";
import StockDetails from "./StockDetails";
import { useState } from "react";
import { Component } from "react";
import { Link } from "react-router-dom";



export default class Homepage extends Component{
  constructor(){
    super();
    this.state = {
      HomeStock : 'tatasteel'
    }
    this.stock = this.state.HomeStock;
  }

  componentDidMount(){
  }

  render(){
    return(
    <>
    <div className="heading flex justify-between">
       <h1>Dashboard </h1>

        
     </div>
     <div className = "flex">
      <div className="main flex-col">
         <div className="main-chart-card">
         <Chart symbol={this.state.HomeStock}/>
        </div>
        <StockDetails symbol = {this.state.HomeStock}/>
      </div>
      <div className="stock-list">
      <div className="button-container">
        <Link to="/nse">
          <button className="exchange-button">NSE</button>
        </Link>
        <Link to = "/bse">
          <button className="exchange-button">BSE</button>
        </Link>
       </div>
      <StockList/>
      </div>

    </div>
    </>)
  }
}


// const Homepage = (props) => {
//   const HomeStock = props.name;
//   return (
//     <>
//     <div className="heading flex">
//       <h1>Dashboard 
//       </h1>
//     </div>
//     <div className = "flex">
//       <div className="main flex-col">
//         <div className="main-chart-card">
//         <Chart symbol={HomeStock}/>
//         </div>
//         <StockDetails symbol = {HomeStock}/>
//       </div>
//       <div className="stock-list">
//         <StockList/>
//       </div>

//     </div>
//     </>
//   );
// };

// export default Homepage;
