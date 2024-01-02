import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home'
import Create from './pages/create'
import Edit from './pages/edit'
import View from './pages/view'

import Product from './product/home'
import ProductCreate from './product/create'
import ProductEdit from './product/edit'
import ProductView from './product/view'

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={"/"} className="nav-link">Home</Link>
          </li>
          <li className='nav-item'>
            <Link to={"/create"} className="nav-link">User Create</Link>
          </li>
          <li className='nav-item'>
            <Link to={"/products"} className="nav-link">Products</Link>
          </li>
          <li className='nav-item'>
            <Link to={"/products/create"} className="nav-link">Product Create</Link>
          </li>

        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/view/:id' element={<View />} />
          <Route path='/products' element={<Product />} />
          <Route path='/products/create' element={<ProductCreate />} />
          <Route path='/products/edit/:id' element={<ProductEdit />} />
          <Route path='/products/view/:id' element={<ProductView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
