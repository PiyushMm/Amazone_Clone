import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Login from './Components/Login';
import './Header.scss';
import './Banner.scss';
import './ProductList.scss';
import './ShoppingBasket.scss';
import './CheckoutAd.scss';
import ProductList from './Components/ProductList';
import ShoppingBasket from './Components/ShoppingBasket';
import CheckoutAd from './Components/CheckoutAd';
import React from 'react';
import './Login.scss';
import Pyment from './Components/Pyment';
import './payment.scss';
import OrderPlaced from './Components/OrderPlaced';



function App() {
  return ( 
    <BrowserRouter>
      <Header />
     
      
      <Routes>
        <Route exact path='/' element={<React.Fragment>
          <Banner />
          <ProductList />
        </React.Fragment>} />
        <Route exact path='/checkout' element={<React.Fragment>
          <CheckoutAd></CheckoutAd>    
          <ShoppingBasket />       
        </React.Fragment>
        } >
         
        </Route>
        <Route exact path='/login' element = {
        <Login/>}/>
       <Route  path='/checkout/Pyment' element = {<Pyment/>}></Route>
       <Route  path='/checkout/Pyment/OrderPlaced' element = {<OrderPlaced/>}></Route>

      </Routes>


    </BrowserRouter>

  );
}

export default App;
