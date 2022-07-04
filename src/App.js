
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import MainScreen from './Components/LandingPage/MainScreen';
import ToolsAndSuppliesForm from './views/Tools/form'



function App() {
  return (
   <div>
    
    <Outlet />
    
    
   </div>

  );
}

export default App;
