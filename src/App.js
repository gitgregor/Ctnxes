import React from 'react';
import SortingTable from './components/tables/SortingTable'
import SplinePlotBandsChart from './components/others/SplinePlotBandsChart'
import KitchenSink from './components/tables/kittchen-sink/Kitchen-sink.component'
import Cntx from './CNTX/contex'

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="App">
        <SortingTable className="component" />
        <SplinePlotBandsChart />
        <KitchenSink />
        <Cntx />
      </div>
    </div>
  );
}

export default App;
