
import {BrowserRouter  as MainRoute,Routes ,Route } from "react-router-dom"
import Notfound from './component/404';
import CartPage from './component/Cart';

import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import ProductDetail from './component/ProductDetail';

function App() {  
  return (
    <div className="App">

    <MainRoute>
        <Header></Header>
      <Routes>
        <Route exact path='/'  element={<Home/>}>
       
        </Route>
        <Route  path='/PorductDetail'  element={<ProductDetail/>}>
     
        </Route>  
        <Route  path='/Cart'  element={<CartPage/>}>
   
        </Route>
        <Route path ="*" element={<Notfound/>}>
         
        </Route>
      </Routes>
  
      <Footer></Footer>
    </MainRoute>
    

    </div>
  );
}

export default App;
