import React from "react";
import Chart from "./Chart";
import MiniChart from "./MiniChart";
import { Link } from "react-router-dom";

const StockList = () => {
  return (
    <div className="balance-card">
      <div className="flex">
        <div className="min-chart">
          <MiniChart symbol = "tatasteel"/>
        </div>
        <Link to='/tatasteel' style={{textDecoration :"none", color : 'white'}}>
        <div className="min-chart_symbol">TATASTEEL</div>
        </Link>
      </div>
      <div className="flex">
        <div className="min-chart">
          <MiniChart symbol = "ashokley"/>
        </div>
        <Link to='/ashokley' style={{textDecoration :"none", color : 'white'}}>
        <div className="min-chart_symbol">ASHOKLEY</div>
        </Link>
      </div>
      <div className="flex">
        <div className="min-chart">
          <MiniChart symbol = "cipla"/>
        </div>
        <Link to='/cipla' style={{textDecoration :"none", color : 'white'}}>
        <div className="min-chart_symbol">CIPLA</div>
        </Link>
      </div>
      <div className="flex">
        <div className="min-chart">
          <MiniChart symbol = "eichermot"/>
        </div>
        <Link to='/eichermot' style={{textDecoration :"none", color : 'white'}}>
        <div className="min-chart_symbol">EICHERMOT</div>
        </Link>
      </div>
      <div className="flex last">
        <div className="min-chart">
          <MiniChart symbol = "reliance"/>
        </div>
        <Link to='/reliance' style={{textDecoration :"none", color : 'white'}}>
        <div className="min-chart_symbol">RELIANCE</div>
        </Link>
      </div>

    </div>
  );
};

export default StockList;
