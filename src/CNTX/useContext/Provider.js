import React, { useState, useEffect } from 'react'
import {DevContext} from './context'
import dataContainer from './dataContainer'



const Provider = props => {
    const [state, setState] = useState(dataContainer)
    
    return (
        <DevContext.Provider
            value={{
                data: state,
                updateCategory: () => {
                    setState({...state, category: "powering"})
                }
            }}
        >
            {props.children}
        </DevContext.Provider>
    )
}

export default Provider
