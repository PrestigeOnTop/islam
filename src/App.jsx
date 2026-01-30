import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Salat from "./pages/Salat/Salat.jsx";
import Dhikr from "./pages/Dhikr";
import Goals from "./pages/Goals";
import Emergency from "./pages/Emergency";
import Navigation from "./components/layout/Navigation";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salat" element={<Salat />} />
        <Route path="/dhikr" element={<Dhikr />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/emergency" element={<Emergency />} />
      </Routes>

      <Navigation />
    </div>
  );
}