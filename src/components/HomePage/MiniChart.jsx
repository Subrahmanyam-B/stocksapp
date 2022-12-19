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
      `https://cloud.iexapis.com/stable/stock/${StockSymbol}/chart/3m?token=pk_9b9d44ca1f9e4ca7997a58628632495e`
    )
      .then((response) => response.json())
      .then(function (data) {

        for (var key in data) {
          stockChartValueFunctionX.push(data[key].priceDate);
          stockChartValueFunctionY.push(data[key].open);
        }
        

        pointerToThis.setState({
          stockChartValuesX: stockChartValueFunctionX,
          stockChartValuesY: stockChartValueFunctionY,

        });

      })
      .catch((err) => console.error(err));
      fetch(`https://cloud.iexapis.com/stable/stock/${StockSymbol}/company?token=pk_9b9d44ca1f9e4ca7997a58628632495e`)
      .then((response) => response.json())  
        .then(function (data) {
            pointerToThis.setState({
              title : data.companyName,
              symbol : data.symbol,
              exchange : data.exchange,
            });
          })
          .catch((err) => console.error(err));
        fetch(`https://cloud.iexapis.com/stable/stock/${StockSymbol}/quote/latestPrice?token=pk_9b9d44ca1f9e4ca7997a58628632495e`)
      .then((response) => response.json())  
        .then(function (data) {
          pointerToThis.setState({
            price : data,
          })
          })
          .catch((err) => console.error(err));
  }

  render() {
    return (<div className ="flex">
        <div>
          <MiniLineChart stockChartValues = {this.state.stockChartValuesY} dates = {this.state.stockChartValuesX}/>
        </div>
        <div className = "mini-price">${this.state.price}</div>
    </div>
    );
  }
}
