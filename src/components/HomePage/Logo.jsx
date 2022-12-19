import React, { Component } from "react";

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    let StockSymbol = "AMZN";
    let TimeInterval = "1min";
    let stockChartValueFunctionX = [];
    let stockChartValueFunctionY = [];

    fetch(`https://cloud.iexapis.com/stable/stock/twtr/chart/3m?token=pk_9b9d44ca1f9e4ca7997a58628632495e` )
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
  }

  render() {
    return (
      <>
        <div className="">
        </div>
      </>
    );
  }
}
