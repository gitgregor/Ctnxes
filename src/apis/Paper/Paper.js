import React, {useState, useEffect} from 'react'
import NestedComponents from '../components/NestedComponents'
const axios = require('axios');
// import axios from 'axios'
// const CoinpaprikaAPI = require('@coinpaprika/api-nodejs-client');


const Paper = () => {
    const [state, setState] = useState([])
    

    useEffect(() => {
        
       setInterval(() => {
         axios('https://api.coinpaprika.com/v1/tickers/btc-bitcoin')
    .then((response) => {
        const {data:{quotes:{USD:{price}}}} = response
        // console.log(response.data);
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
        setState(price)
      });
    }, 5000);
    })

   

   
// .then(resolve => resolve.json())
// .then(value => setState(value) )

console.log(state)

    return (
        <div>
            <h2>Ticker Data</h2>
   {state}
        </div>
    )
}

export default Paper



    // const client = new CoinpaprikaAPI();
    // client.getCoins({coinId: 'btc-bitcoin'})
    // .then(console.log)
    // .catch(console.error);
