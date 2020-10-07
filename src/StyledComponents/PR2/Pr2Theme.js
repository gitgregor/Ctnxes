import React from 'react'
import {ThemeProvider} from 'styled-components'


const theme ={
    colors:{
        myGreen: "green",
        khaki:  "rgb(126, 156, 78)",
        black: "#000",
        borders: "lightgreen",
        fontColor: "white",
    },
    fonts:[ 'Arial', 'Helvetica', 'sans-serif', 'Roboto'],
    fontSizes:{
        small: "1em",
        medium: "2em",
        large: "3em"
    }
}

const Theme = ({children}) => (
    <ThemeProvider theme={theme} >
        {children}
        </ThemeProvider>
)

export default Theme
