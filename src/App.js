import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import TourView from "./components/views/TourView";
import Validation from "./components/popup/Validation";
import ScrollToAnchor from "./components/ScrollToAnchor";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // const navigate = useNavigate();

  return (
    <div className="App">
      <ScrollToAnchor />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path={`/tour-view/:id`} element={<TourView />}></Route>
        <Route path="/validation" element={<Validation />}></Route>
      </Routes>
    </div>
  );
}

export default App;
