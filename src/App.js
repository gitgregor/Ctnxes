import React from 'react';
import SortingTable from './components/tables/SortingTable'
import SplinePlotBandsChart from './components/others/SplinePlotBandsChart'
import KitchenSink from './components/tables/kittchen-sink/Kitchen-sink.component'
import CntxClass from './CNTX/CntxClass/contexClass'
import ComponentCF from './CNTX/CntxF/ComponentC'
import ComponentAF from './CNTX/CntxF/ComponentA'
import RowSelectionChkBox from './components/tables/rowSelectionChkBox'
import RadioButtonRowselection from './components/tables/radiobutton'
import Sc from './StyledComponents/sc'
import Provider from './CNTX/useContext/Provider'
import TopComponentCntx from './CNTX/useContext/TopComponent'
import RandomApi from './apis/randomizer/RandomApi'
import CompConsumeThemeSC from './StyledComponents/ThemeStyled/CompConsumeThemeSC'
import Pr2Component from './StyledComponents/PR2/Pr2Component'


import './App.css';

function App() {
  return (
    <div className="container">
      <div className="App">
        {/* <SortingTable className="component" />
        <SplinePlotBandsChart />
        <KitchenSink />
        <CntxClass />
        <ComponentCF />
        <ComponentAF />
        <RowSelectionChkBox /> */}
        {/* <RadioButtonRowselection /> */}
        {/* <Sc /> */}
        {/* <Provider/> */}
        <TopComponentCntx />
        {/* <RandomApi /> */}
        <CompConsumeThemeSC />
<Pr2Component />

      </div>
    </div>
  );
}

export default App;
