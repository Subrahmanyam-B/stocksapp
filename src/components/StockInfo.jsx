import { useParams } from "react-router-dom";
import React from 'react'
import StockDetails from "./HomePage/StockDetails";
import Chart from "./HomePage/Chart";

const StockInfo = () => {
   const {stockID} = useParams();
  return (<>
    <div className = "main-chart-card max">
      <Chart symbol = {stockID}/>
    </div>
      <StockDetails symbol = {stockID}/>
  </>
  )
}

export default StockInfo