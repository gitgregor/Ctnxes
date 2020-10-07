import React from 'react'
import Button2style from './Button'
import styled, {css} from "styled-components";
import './sc.css'

const Tablex = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background-color: green ;
background-color: ${props => props.variant && css`
color : white;
` };
`;

const theme = {
    background: "cadetblue",
    foreground: "red",
    tableBody: "blue"
}


const Table = () => {
    return (
        <Tablex variant="yellow">
             <tr className='yellow'>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
        </Tablex>
    )
}



const Sc = () => {

    
    return (
        <div>
            <Table />
            <Button2style title="ex content">
                btn
                </Button2style>
        </div>
    )
}

export default Sc

