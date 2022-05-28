import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";

function CartPage() {
  const { cart, setcart } = useContext(Cart);
  console.log("cart page", cart);

    const price = cart.reduce((acc,cur)=>{
      return acc += cur.price 
      
    },0)
  
  return (
    <>

    <div className="cart-container">
    <div>

      {cart.map((x) => {
        return (
          <div className="cart " key={x.id}>
            <div className="cart-image">
              <img src={x.img} alt={x.title} />
            </div>
            <div className="cart-item-detail">
              <div className="card-title">Name: {x.title}</div>

              <p>
                <i class="fas fa-rupee-sign"></i> {x.price}
              </p>

              <button
                className="Btn-RmToCart"
                onClick={() => {
                  setcart(cart.filter((c)=>{
                  return  c.id !== x.id
                  }))
                }}
              >
                remove cart
              </button>
            </div>
            
          </div>                
        );                          
      })}

      
</div>

        {
          (price === 0)?(
            <div className="cartEmpty">
              Cart is empty <Link to="/"> Go to Shopping Home page </Link>
            </div>


          ):(   <div className="price">
          total price  <br /><i class="fas fa-rupee-sign"></i> {
            price
          }
  
          <div className="payment">
            <button className="procedToPay">
              Pay {
                price
              } <i class="fas fa-rupee-sign"></i>
            </button>
          </div>
        </div>)
        }
   
    </div>
    
    </>  );
}

export default CartPage;
