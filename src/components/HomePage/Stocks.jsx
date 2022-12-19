import React from 'react'

const Stocks = () => {
   const api_url = `https://cloud.iexapis.com/stable/stock/aapl/intraday-prices?token=pk_9b9d44ca1f9e4ca7997a58628632495e`;
   async function getUser() {
  
     // Making an API call (request)
     // and getting the response back
     const response = await fetch(api_url);
  
     // Parsing it to JSON format
     const data = await response.json();
     console.log(data);
   }

   getUser();
  return (
    <div>Stocks</div>
  )
}

export default Stocks