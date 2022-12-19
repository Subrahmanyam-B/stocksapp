import React , {Component} from "react";

export default class News extends Component {
  constructor(props){
    super(props);
    this.symbol = props.symbol;
    this.state = {
      news : [],
      headline : '',
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews(){
    const pointerToThis = this;
    let StockSymbol = this.symbol;
    let dataArray = [];

    fetch(`https://cloud.iexapis.com/stable/stock/msft/news?token=pk_9b9d44ca1f9e4ca7997a58628632495e`)
    .then((response) => response.json())
      .then(function (data) {
        for(var key in data){
          dataArray.push(data[key]);
        }
        pointerToThis.setState({
          news : dataArray,
        });
        
      })
      .catch((err) => console.error(err));
    fetch(`https://cloud.iexapis.com/stable/stock/aapl/news?token=pk_9b9d44ca1f9e4ca7997a58628632495e`)
    .then((response) => response.json())
      .then(function (data) {
        for(var key in data){
          dataArray.push(data[key]);
        }
        console.log(dataArray);
        pointerToThis.setState({
          news : dataArray,
          headline : dataArray[0].headline
        });
        console.log(pointerToThis.state.headline);
        
      })
      .catch((err) => console.error(err));
  }



render(){
  return (
    <div className="newspage">
Coming Soon.......
    </div>
  );
}
}

