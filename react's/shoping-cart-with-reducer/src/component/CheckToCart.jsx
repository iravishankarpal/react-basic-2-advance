import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartStore } from "./Context-Reducer/Context";
// import { cartReducer } from "./Context-Reducer/Reducer";

function CheckToCart({ Prod }) {
  const { cart , dispatch} = useContext(CartStore);
  var b = cart.find((item) => item.id === Prod.id);
  console.log("b :", b);
  
  if (cart.some((x)=> x.id === Prod.id)) {
    return (
      <Button
        className="danger lg px-4 "
        variant="danger"
        onClick={() => {

          dispatch(
            {
              type: "REMOVE_FROM_CART",
              payload: Prod
            }
            
            );
            // console.log('state :', state);
        }}
      >
        Remove from cart{" "}
      </Button>
    );
  } else {
    return (
      <Button
      className="mx-2"
      variant="outline-success"
      onClick={() => {
        dispatch(
          {
            type: "ADD",
            payload: Prod
          }

        );
        // console.log('state :', state);

      }}
    >
      Add to Cart
    </Button>
    )
  }
  
}

export default CheckToCart;
