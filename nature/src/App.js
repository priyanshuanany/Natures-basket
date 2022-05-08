import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ProductPage } from './components/ProductPage';
import {BlogRouter} from "./blog/blogrouter"
import {Blog} from "./blog/blog"
import {Detail} from "./blog/detail/detail"
import { Gifts } from './components/Gifts';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Navbar />}></Route>
         <Route path='/blog' element={<Blog/>}></Route>
       <Route path="/healty-food" element={<Detail></Detail>}></Route>
       <Route path="/Gifting" element={<Gifts/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/register" element={<Registration/>}></Route>
        <Route path='/productpage' element={<ProductPage />}></Route>
      </Routes>
      {/* <ProductPage /> */}
    </div>
  );
}


export default App;