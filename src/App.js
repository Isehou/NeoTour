import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import TourView from "./components/views/TourView";

function App() {
  // const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/tour-view" element={<TourView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
