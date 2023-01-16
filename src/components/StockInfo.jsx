import { useParams } from "react-router-dom";
import React from 'react'
import StockDetails from "./HomePage/StockDetails";
import Chart from "./HomePage/Chart";

const StockInfo = () => {
   const {stockID} = useParams();
  return (<><div>
    <div className = "main-chart-card max">
      <Chart symbol = {stockID}/>
    </div>
      <StockDetails symbol = {stockID}/>
  </div>
  </>
  )
}

export default StockInfo