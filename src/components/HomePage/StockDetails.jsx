import React , {Component} from "react";

export default class StockDetails extends Component {
  constructor(props){
    super(props);
    this.symbol = props.symbol;
    this.state = {
      logoUrl : "",
      title : "",
      desc : "",
      price : "",
    }
  }

  componentDidMount() {
    this.fetchLogo();
    this.fetchInfo();
  }

  fetchLogo(){
    const pointerToThis = this;
    let StockSymbol = this.symbol;

    fetch(`https://cloud.iexapis.com/stable/stock/${StockSymbol}/logo?token=pk_9b9d44ca1f9e4ca7997a58628632495e`)
    .then((response) => response.json())
      .then(function (data) {
        pointerToThis.setState({
          logoUrl : data.url
        });
      })
      .catch((err) => console.error(err));
  }

  fetchInfo(){
    const pointerToThis = this;
    let StockSymbol = this.symbol;

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


render(){
  return (
    <div className="info flex">
      <div className="logo">
        <img src={this.state.logoUrl} alt="" />
      </div>
      <div className="details">
        <div className="title">{this.state.title}</div>
        <div className = "flex">
          <div className="price">${this.state.price}</div>
          <div>
          <div className="symbol">Symbol : {this.state.symbol}</div>
          <div className="exchange">Exchange : {this.state.exchange} </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

