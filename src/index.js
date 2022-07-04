import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sample from './Components/Sample/Sample'
import ToolsAndSupplies from './Components/ToolsAndSupplies';
import RepairsAndMaintenance from './Components/RepairsAndMaintanance';
import RepairsAndSatisfaction from './Components/RepairsAndSatisfaction';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
       
          {/* <Route path="toolsandsupplies" element={<ToolsAndSuppliesForm />} /> */}
          <Route path="mis" element={<Sample />} />
          <Route path="tns" element={<ToolsAndSupplies />} />
          <Route path="rnm" element={<RepairsAndMaintenance />} />
          <Route path="rns" element={<RepairsAndSatisfaction />} />

          
        </Route>
      
    </Routes>
  </BrowserRouter>

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
