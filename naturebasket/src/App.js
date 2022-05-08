// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import { Navbar } from './components/Navbar';
import { ProductPage } from './components/ProductPage';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Routes>
        <Route path='/productpage' element={<ProductPage />}></Route>
      </Routes> */}
      <ProductPage />
    </div>
  );
}

export default App;
