import React, { Component } from "react";
import MiniLineChart from './MiniLineChart';

export default class MiniChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartValuesX: [],
      stockChartValuesY: [],
      price : '',
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

    fetch(
      `https://flipper-backend-iiits-hacathonnnn.onrender.com/${StockSymbol}`
    )
      .then((response) => response.json())
      .then(function (data) {
        var i = 0;
        for (var key in data['business']) {
          stockChartValueFunctionX.push(data['business'][key].Date);
          stockChartValueFunctionY.push(data['business'][key].Open);
          i++;
          if (i === 31) break;
        }

        pointerToThis.setState({
          stockChartValuesX: stockChartValueFunctionX,
          stockChartValuesY: stockChartValueFunctionY,
          price : data['business'][1234].Close.toFixed(2),

        });

      })
      .catch((err) => console.error(err));

  }

  render() {
    return (
    <div className ="flex">
        <div>
          <MiniLineChart stockChartValues = {this.state.stockChartValuesY} dates = {this.state.stockChartValuesX}/>
        </div>
        <div className = "mini-price">${this.state.price}</div>
    </div>
    );
  }     
}
