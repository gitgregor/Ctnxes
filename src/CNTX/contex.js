import React, { Component } from 'react'

const ThemeContext = React.createContext('light');

class Context extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}
      class ThemedButton extends React.Component {
        static contextType = ThemeContext;
        render() {
          return <Button theme={this.context} />;
      }
      }


// const Button = () => {
//     return (
//         <div>
//             <button>
//                 cntxBttn
//             </button>
//         </div>
//     )
// }



export  class Button extends Component {
    static contextType = ThemeContext;
    render() {
        return (
            <div>
                <button>
                    {this.context}
                </button>
            </div>
        )
    }
}



export default Context