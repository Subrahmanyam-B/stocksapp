import { Business } from "@mui/icons-material";
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import LineChart from './LineChart';

function fetchData(){}

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartValuesX: [],
      stockChartValuesY: [],
    };
    this.symbol = props.symbol;
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    let StockSymbol = this.symbol;
    let TimeInterval = "1min";
    let stockChartValueFunctionX = [];
    let stockChartValueFunctionY = [];

    fetch(`https://flipper-backend-iiits-hacathonnnn.onrender.com/tatasteel`)
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
})

    fetch(`https://flipper-backend-iiits-hacathonnnn.onrender.com/tatasteel` )
      .then((response) => response.json())
      .then(function (data) {
        console.log(data['business']);
        var i = 0;
        for (var key in data['business']) {
          stockChartValueFunctionX.push(data['business'][key].Date);
          // if(data[key].high ==! null){
          stockChartValueFunctionY.push(data['business'][key].High);
          i++;
          if (i === 31) break;
        }
        pointerToThis.setState({
          stockChartValuesX: stockChartValueFunctionX,
          stockChartValuesY: stockChartValueFunctionY,
          
        });
        
      })
      .catch((err) => console.error(err));

  }

  render() {
    return (
      <>
        <div className="">
          <div className="chart-button-container">
          <button className="chart-button" onClick={fetchData}>1w</button>
          <button className="chart-button">1m</button>
          <button className="chart-button">3m</button>
          </div>
          <LineChart stockChartValues = {this.state.stockChartValuesY} dates = {this.state.stockChartValuesX} symbol= {this.symbol}/>
        </div>
      </>
    );
  }
}
