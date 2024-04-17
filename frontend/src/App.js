
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSingup';
import Product from './Pages/Product';
import Favs from './Pages/Favs';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/favs' element={<Favs/>}/>
          <Route path='/mens' element={<ShopCategory category = 'Mens'/>}/>
          <Route path='/womens' element={<ShopCategory category = 'Womens'/>}/>
          <Route path='/kids' element={<ShopCategory category = 'Kids'/>}/>
          <Route path='/shoes' element={<ShopCategory category = 'Shoes'/>}/>
          <Route path='/hats' element={<ShopCategory category = 'Hats'/>}/>
          <Route path='/upperMens' element={<ShopCategory category = 'UpperMens'/>}/>
          <Route path='/lowerMens' element={<ShopCategory category = 'LowerMens'/>}/>
          <Route path='/upperWomens' element={<ShopCategory category = 'UpperWomens'/>}/>
          <Route path='/lowerWomens' element={<ShopCategory category = 'LowerWomens'/>}/>
          <Route path='/accesories' element={<ShopCategory category = 'Accesories'/>}/>
          <Route path='/product' element={<Product/>}/>
            <Route path=':productId' element={<Product/>}/>
          <Route path='/login' element={<LoginSingup/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
