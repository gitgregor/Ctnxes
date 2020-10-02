import React from 'react';
import ThemeContext from './ThemeContext';
import C from './ComponentC'
 
const A = () => (
  <ThemeContext.Provider value="green">
    <C />
  </ThemeContext.Provider>
);

export default A