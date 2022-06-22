import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartStore } from "./Context-Reducer/Context";
import { FaRupeeSign } from "react-icons/fa";
import CheckToCart from "./CheckToCart";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart , dispatch } = useContext(CartStore);
  const totalPrice = cart.reduce((acc, cur) => {
    return acc + (cur.price * cur.qty);
  }, 0);

  return (
    <div className=" cart-container  ">
      <div className=" price-detail ">
        <h3 className="p-2 m-2">Price Details</h3>
        <hr />
        <div>
          <div>price ( {cart.length} Item)</div>
          <div> total </div>
        </div>
        <div>
          <div>Discount</div>
          <div>total</div>
        </div>
        <div>
          <div>Dilevery charges</div>
          <div> total</div>
        </div>
        <hr />
        <div>
          <strong> Total amount </strong>
          <strong>
            {" "}
            <FaRupeeSign />
            {totalPrice}
          </strong>
        </div>
        <hr />
        <div className="text-success my-2" varient="outline-success ">
          {" "}
          you have saved{" "}
        </div>

        <Button className="success lg px-4 " variant="success">
          order Now{" "}
        </Button>
      </div>
      <div className=" cart-detail ">
        {cart.length === 0 ? (
          <h3 className="loading">
            No item in cart <br />
            <Link to="/">Home</Link>
          </h3>
        ) : (
          cart.map((Prod) => {
            return (
              <div className="cart-item" key={Prod.id}>
                <div className="cart-item-image">
                  <img src={Prod.image} alt="img" />
                </div>
                <div>
                  <h5>{Prod.title}</h5>
                  <div>
                    <strong>Price</strong>
                    <strong> {Prod.price} </strong>
                  </div>
                  <div>
                    <span> Quantity </span>
                  
                    <input value={Prod.qty}  variant="outline-dark" onChange={(e) => {
                      e.preventDefault();
                      dispatch({type:'UPDATE_QTY',payload:{id:Prod.id,qty:Number(e.target.value)}})
                    }} />
            
                       
                     
               
                  </div>
                  <div>
                    <strong>Total</strong>
                    <strong>
                      {" "}
                      <FaRupeeSign /> {Prod.price * Prod.qty}
                    </strong>
                  </div>
                  <CheckToCart Prod={Prod}></CheckToCart>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default CartPage;
