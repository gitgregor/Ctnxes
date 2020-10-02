// import React from 'react';
// import ThemeContext from './ThemeContext';
 
// const C = () => (
//   <ThemeContext.Consumer>
//     {color => (
//       <p style={{ color }}>
//         Comp C
//       </p>
//     )}
//   </ThemeContext.Consumer>
// );


// export default C



//======= use useContext ===========

import React from 'react';
import ThemeContext from './ThemeContext';
 
const C = () => {
  const color = React.useContext(ThemeContext);
 
  return (
    <p style={{ color }}>
     Comp C useState
    </p>
  );
};

export default  C