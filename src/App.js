import './App.css';
import Header from './components/Header';
import Products from './pages/Products';
import Product from './pages/Product'
import Footer from './components/Footer';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Header />
      <Routes>
      <Route path='/' element={<Products />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/product/' element={<Product />} />

  
        </Routes>
        <Footer />
      </BrowserRouter>
        
    </div>
  );
}


export default App;
