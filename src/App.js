import React from 'react';
import SortingTable from './components/tables/SortingTable'
import SplinePlotBandsChart from './components/others/SplinePlotBandsChart'
import KitchenSink from './components/tables/kittchen-sink/Kitchen-sink.component'
import CntxClass from './CNTX/CntxClass/contexClass'
import ComponentCF from './CNTX/CntxF/ComponentC'
import ComponentAF from './CNTX/CntxF/ComponentA'

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="App">
        <SortingTable className="component" />
        <SplinePlotBandsChart />
        <KitchenSink />
        <CntxClass />
        <ComponentCF />
        <ComponentAF />
      </div>
    </div>
  );
}

export default App;
