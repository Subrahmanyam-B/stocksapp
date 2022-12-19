import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import LineChart from './LineChart';

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

    fetch(`https://cloud.iexapis.com/stable/stock/${StockSymbol}/chart/3m?token=pk_9b9d44ca1f9e4ca7997a58628632495e` )
      .then((response) => response.json())
      .then(function (data) {
        for (var key in data) {
          stockChartValueFunctionX.push(data[key].date);
          // if(data[key].high ==! null){
          stockChartValueFunctionY.push(data[key].high);
        }
        pointerToThis.setState({
          stockChartValuesX: stockChartValueFunctionX,
          stockChartValuesY: stockChartValueFunctionY,
          
        });
        
      })
      .catch((err) => console.error(err));
    fetch(`https://cloud.iexapis.com/stable/stock/aapl/logo?token=pk_9b9d44ca1f9e4ca7997a58628632495e`)
    .then((response) => response.json())
      .then(function (data) {
        console.log(data);
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <>
        <div className="">
          <LineChart stockChartValues = {this.state.stockChartValuesY} dates = {this.state.stockChartValuesX} symbol= {this.symbol}/>
        </div>
      </>
    );
  }
}
