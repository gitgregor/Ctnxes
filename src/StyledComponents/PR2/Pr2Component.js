import React from 'react'
import Theme from './Pr2Theme'
import styled, {css} from 'styled-components'

const Container = styled.div`
width: 50%;
border: ${props => `2px solid ${props.theme.colors.borders}`};
background-color: ${props => props.theme.colors.khaki};
color: ${props => props.theme.colors.fontColor};
`


const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.black};
`;

const Pr2Component = () => {
    return (
        <Theme>
            <Container>
            <Heading isHeading={true}>Superb component</Heading>
        <h2>By the power of styled-components!</h2>
            </Container>
        </Theme>
    )
}

export default Pr2Component
