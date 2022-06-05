import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Pieces from './components/pieces/Pieces';
import CutSizesChart from './components/cut_sizes_chart/CutSizesChart';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
        <Route path="pieces" element={<Pieces/>}/>
          <Route path="chart" element={<CutSizesChart />} />
    </Routes>
  </BrowserRouter>
);
