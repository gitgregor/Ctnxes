import React, {useContext} from 'react'
import Provider from './Provider'
import {DevContext} from './context'
import {TopStylingSC} from '../../StyledComponents/styled/TopStylingSC'



const TopComponent = () => {



const Sub1 = () => <Sub2 />
const Sub2 = () => <Sub3 />
const Sub3 = () => <Sub4 />
const Sub4 = () => <Sub5 />
const Sub5 = () => <Sub6 />
const Sub6 = () => <Sub7 />

const Sub7 = () => {
    const data = useContext(DevContext)
// const {category} = [data]
// const data1 = [data]


    console.log(data)
    // console.log(data1)
    return(
        <div>
            {/* <p>{data1.map( item => item.category)}</p> */}
            <p>{Object.values(data).map( item => item.category)}</p>
            <button onClick={data.updateCategory}
            >Update Category
            </button>
        </div>
    )
}



    return (
        <div>
            <Provider>
            <TopStylingSC primary>
                <Sub7 />
            </TopStylingSC>
            </Provider>
        </div>
    )
}

export default TopComponent


// ==== use Context API - MyContext.Consumer ========

// import React from 'react'
// import Provider from '../providers/Provider'
// // import Context from '../contexts/context'
// import {DevContext} from '../contexts/context'

// const TopComponent = () => {

// const Sub1 = () => <Sub2 />
// const Sub2 = () => <Sub3 />
// const Sub3 = () => <Sub4 />
// const Sub4 = () => <Sub5 />
// const Sub5 = () => <Sub6 />
// const Sub6 = () => <Sub7 />

// const Sub7 = () => {

//     return(
//         <DevContext.Consumer>
// {
// contextData => {
//     return(
//         <div>
//             <p>{contextData.data.category}</p>
//             <button onClick={contextData.updateCategory}
//             >Update Category
//             </button>
//         </div>
//     )
// }
// }
//         </DevContext.Consumer>

// )

// }



//     return (
//         <div>
//             <Provider>
//                 <Sub7 />
//             </Provider>
//         </div>
//     )
// }

// export default TopComponent
