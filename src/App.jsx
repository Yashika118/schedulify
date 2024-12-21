import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomeScreen from './pages/HomeScreen';
import FCFSPage from './pages/FCFSPage';
import SJFPage from "./pages/SJFPage";
import RoundRobinPage from "./pages/RoundRobinPage";
import PriorityPage from "./pages/PriorityPage";
import SRTFPage from "./pages/SRTFPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}   />
        <Route path="/fcfs" element={<FCFSPage/>}   />
        <Route path="/sjf" element={<SJFPage/>}   />
        <Route path="/round-robin" element={<RoundRobinPage/>}   />
        <Route path="/priority" element={<PriorityPage/>}   />
        <Route path="/srtf" element={<SRTFPage/>}   />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App