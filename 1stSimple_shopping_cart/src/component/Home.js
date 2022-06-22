import React, { useContext } from "react";
import { Cart } from "../Context";
import list from "./CartData";
import "../App.css"
function Home() {
  
  var {  cart, setcart} = useContext(Cart)
  console.log("cart in home component ", typeof(cart),cart   )
  return (
    <div className="card-container">
      {list.map((x) => {
        return (
          <div className="card " key={x.id}>
            <div className="card-image">
              <img src={x.img} alt={x.title} />
            </div>
            <div className="card-title">Name: {x.title}</div>
           
            <p>
              <i class="fas fa-rupee-sign"></i> {x.price}
              <span>  stock {x.amount}</span>
            </p>
    
            <p>Author : {x.author}</p>

            {
              (cart.includes(x))?( <button
            className="Btn-RmToCart"
            onClick={() => {
              setcart(cart.filter((c)=>{
              return  c.id !== x.id
              }))
            }}
          >
            remove from cart
          </button>) : ( <button className="Btn-addToCart" onClick={()=>{
                setcart([...cart , x])
          }
          }>  ADD to cart</button>)
            }
           




          </div>
        );
      })}
    </div>
  );
}

export default Home;
