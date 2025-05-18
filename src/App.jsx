import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Pyrukynd from "./pages/Pyrukynd/Pyrukynd";
import MyAgios from "./pages/MyAgios/MyAgios";
import Nowsta from "./pages/Nowsta/Nowsta";
import COB from "./pages/COB/COB";
import Coding from "./pages/Coding/Coding"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/pyrukynd" element={<Pyrukynd />} />
        <Route path="/my-agios" element={<MyAgios />} />
        <Route path="/nowsta" element={<Nowsta />} />
        <Route path="/city-of-boston" element={<COB />} />
            <Route path="/coding" element={<Coding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
