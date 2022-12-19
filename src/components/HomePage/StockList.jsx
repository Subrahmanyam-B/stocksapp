import React from "react";
import Chart from "./Chart";
import MiniChart from "./MiniChart";

const StockList = () => {
  return (
    <div className="balance-card">
      <div className="flex">
        <div className="min-chart">
          <MiniChart symbol = "AMZN"/>
        </div>
        <div className="min-chart_symbol">AMZN</div>
      </div>
      <div className="flex">
        <div className="min-chart">
          <MiniChart symbol= "AAPL" />
        </div>
        <div className="min-chart_symbol">AAPL</div>
      </div>
      <div className="flex">
        <div className="min-chart">
          <MiniChart symbol = "MSFT"/>
        </div>
        <div className="min-chart_symbol">MSFT</div>
      </div>
      <div className="flex">
        <div className="min-chart">
          <MiniChart symbol = "SBUX"/>
        </div>
        <div className="min-chart_symbol">SBUX</div>
      </div>
    </div>
  );
};

export default StockList;
