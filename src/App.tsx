import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./Components/AppNavbar.tsx";
import Habits from "./Components/Habits.tsx";
import HabitDetail from "./Components/HabitDetail.tsx";

function App() {

  return (
      <div className="ultimate-parent">
    <AppNavbar/>
    <Routes>
        {/*<Route path="/" element={<Dashboard/>} />*/}
        <Route path="/habits" element={<Habits />} />
        <Route path="/habit/:id" element={<HabitDetail />} />
        {/*<Route path="/habits" element={<Workouts />} />*/}
        {/*<Route path="/habits" element={<Nutrition />} />*/}
        {/*<Route path="/habits" element={<Progress />} />*/}
        {/*<Route path="/habits" element={<Messaging />} />*/}
    </Routes>
    </div>
  )
}

export default App
