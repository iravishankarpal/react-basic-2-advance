import "./App.css";
import "./media.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import CartPage from "./component/Cart";
import { Cart } from "./Context";
import { useContext } from "react";

function App() {
  var { cart  } = useContext(Cart)
  return (
    <div className="App">
 

      <BrowserRouter>
      <div className="navbar">
        <div className="logo">
          <Link to="/"> Shoping Cart Home </Link>
        </div>
        <div className="cart">
          <Link Link to="/cart">
         
            cart <i class="fa-solid fa-cart-shopping">
              </i><span className="cart-count">{cart.length}</span>
          </Link>
        </div>
      </div>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/Cart" exact element={<CartPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
