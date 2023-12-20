import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import './styles.css'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

