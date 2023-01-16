import React , {Component} from "react";

export default class StockDetails extends Component {
  constructor(props){
    super(props);
    this.symbol = props.symbol;
    this.companies = ['Tata Steel' , 'Cipla' , 'Ashok Leyland' , 'Eicher Motors' , 'Reliance']
    this.state = {
      Open : '',
      Close : '',
      High : '',
      title : "",
      exchange : "",
      price : "",
    }
  }

  componentDidMount() {
    this.fetchLogo();
  }

  fetchLogo(){
    const pointerToThis = this;
    let StockSymbol = this.symbol;

    fetch(`https://flipper-backend-iiits-hacathonnnn.onrender.com/${StockSymbol}`)
    .then((response) => response.json())
      .then(function (data) {
        pointerToThis.setState({
          symbol : StockSymbol,
          Open : data['business'][1234].Open.toFixed(2),
          Close : data['business'][1234].Close.toFixed(2),
          High : data['business'][1234].High.toFixed(2),
          price : data['business'][1234].Close.toFixed(2),
          exchange : 'NSE',
        });
      })
      .catch((err) => console.error(err));
        if(StockSymbol === 'tatasteel'){
          pointerToThis.setState({
            title : "Tata Steel",
            desc : "Tata Steel Limited is an Indian multinational steel-making company headquartered in Mumbai, Maharashtra, India, and a subsidiary of the Tata Group. It is the world's twelfth-largest steelmaking company based on crude steel production.",
          });
        }
        else if(StockSymbol === 'cipla'){
          pointerToThis.setState({
            title : "Cipla",
            desc : " Cipla Limited is an Indian multinational pharmaceutical and biotechnology company headquartered in Mumbai, Maharashtra, India. It is the fourth-largest pharmaceutical company in India by market share. Cipla is a constituent of the BSE Sensex and the Nifty 50 indices.",
          });
        }
        else if(StockSymbol === 'reliance'){
          pointerToThis.setState({
            title : "Reliance Industries",
            desc : "Reliance Industries Limited is an Indian conglomerate holding company headquartered in Mumbai, Maharashtra, India. It operates in five business segments: petrochemicals, textiles, natural resources, retail, and telecommunications.",
          });
        }
        else if(StockSymbol === 'ashokley'){
          pointerToThis.setState({
            title : "Ashok Leyland",
            desc : "Ashok Leyland Limited is an Indian multinational automotive manufacturer headquartered in Chennai, Tamil Nadu, India. It is a subsidiary of the Hinduja Group. It is the second largest commercial vehicle manufacturer in India, and the second largest manufacturer of buses in the world.",
          });
        }
        else if(StockSymbol === 'eichermot'){
          pointerToThis.setState({
            title : "Eicher Motors",
            desc : "Eicher Motors Limited is an Indian multinational manufacturer of commercial vehicles and two-wheelers, headquartered in Gurgaon, Haryana, India. It is a subsidiary of the VE Commercial Vehicles Limited, a 50:50 joint venture between the VE Group and the Volvo Group.",
          });
        } 

  }


render(){
  return (
    <div className="info flex box-info">
      <div className="details">
        <div className="title">{this.state.title}</div>
        <div className = "flex">
          <div className="price">{this.state.price} INR</div>
          <div className="flex justify-between">
            <div className="price-containers">
            <div className="exchange-button2">Open:   {this.state.Open}</div>
            <div className="exchange-button2">Close:  {this.state.Close}</div>
            <div className="exchange-button2">High:   {this.state.High}</div>
            </div>
          <div className="exchange-info">
          <div className="symbol">Symbol : {this.state.symbol}</div>
          <div className="exchange">Exchange : {this.state.exchange} </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

