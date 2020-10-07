
import React, {useState, useEffect} from 'react'
const axios = require('axios');

const Paper = () => {
    const [state, setState] = useState([])
    

    useEffect(() => {
        
       setInterval(() => {

         axios('https://randomuser.me/api/?format=json&results=10').then((response) => {
        const {data:{info:{seed}}} = response
        setState(seed)
        console.log(response)
      });
    }, 500);
    })

console.log(state)

    return (
        <div>
            <h2>Display Data</h2>
   {state}
        </div>
    )
}

export default Paper

