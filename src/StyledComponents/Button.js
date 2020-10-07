import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: yellow;
    `};
`

const Container = styled.div`
  text-align: center;
`



const Button2render = (props) => {
    return (
        <Container>
        <Button>Normal </Button>
        <Button primary>
            {props.children}
            {props.title}
            </Button>
      </Container>
    )
}

export default Button2render
