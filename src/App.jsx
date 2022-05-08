
import './App.css'
import { Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import { Navbar } from './components/Navbar';
import Pastpurchases from './pages/Pastpurchases';
import Gifting from './pages/Gifting';
import Rewards from './pages/Rewards';
import Everythingfood from './pages/Everythingfood';
import Recipe from './pages/Recipe';
import Newsletter from './pages/Newsletter';
import Offers from './pages/Offers';
import Lexclusif from './pages/Lexclusif';
import Healtyalternatives from './pages/Healtyalternatives';
import Bookstorevisit from './pages/Bookstorevisit';

function App() {
  return (
    <div className="App">
  <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Pastpurchases' element={<Pastpurchases />}></Route>
        <Route path='/Gifting' element={<Gifting />}></Route>
        <Route path='/Rewards' element={<Rewards />}></Route>
        <Route path='/Everythingfood' element={<Everythingfood />}></Route>
        <Route path='/Recipe' element={<Recipe />}></Route>
        <Route path='/Newsletter' element={<Newsletter />}></Route>
        <Route path='/Offers' element={<Offers />}></Route>
        <Route path='Lexclusif' element={<Lexclusif />}></Route>
        <Route path='/Healtyalternatives' element={<Healtyalternatives />}></Route>
        <Route path='Bookstorevisit' element={<Bookstorevisit />}></Route>
      </Routes>
    </div>
  )
}

export default App
