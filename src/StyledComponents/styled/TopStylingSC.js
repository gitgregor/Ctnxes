import styled, {css} from 'styled-components'

const theme = {
    background: 'gray',
    color: 'green'
}

export const TopStylingSC = styled.div`
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      background-color: ${props =>props.primary ? "blue" : "green"};
      //   background-color: red;
      
      `