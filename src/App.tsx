import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Grad from "./pages/Grad";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/grad" element={<Grad />} />
    </Routes>
  );
}

export default App;
