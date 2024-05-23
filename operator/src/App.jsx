import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from './components/SideBar'
import Dashboard from './pages/Dashboard';
import BusLists from './pages/BusLists';

const App = () => {
  return (
    <Router>
      <div className="w-full dark:bg-slate-950 font-lsl tracking-wide">
        <div className="flex w-full max-w-[1400px] mx-auto ">
          <div className="">
            <SideBar />
          </div>
          <div className="flex-1 p-5">
            <Routes>
              <Route path="/" element={<BusLists />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App
