import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from './components/SideBar'
import Dashboard from './pages/Dashboard';
import BusLists from './pages/BusLists';

const App = () => {
  return (
    <Router>
      <div class="flex w-full max-w-[1400px] mx-auto shadow-lg">
        <div className="">
          <SideBar />
        </div>
        <div className="flex-1 p-5">
          <Routes>
            <Route path="/" element={<BusLists />} />
            {/* Add more routes for different sections of your dashboard */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
