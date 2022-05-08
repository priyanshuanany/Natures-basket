
import './App.css'
import { Routes,Route } from "react-router-dom";
import About from './components/About'
import Home from './components/Home'
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
  <Navbar />
      <Routes>
        <Route path='/Home' element={<Home></Home>}></Route>
        {/* <Route path='/About' element={<About></About>}></Route> */}
      </Routes>
    </div>
  )
}

export default App
