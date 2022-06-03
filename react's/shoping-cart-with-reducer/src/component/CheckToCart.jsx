import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { CartStore } from './Context-Reducer/Context'

function CheckToCart({Prod}) {

    const {cart ,setCart} = useContext(CartStore)
  return (
      <>
         <Button
              className="mx-2"
              variant="outline-success"
              onClick={() => {
                 if(cart.includes(Prod)){
                     alert('Item is Already added')
                 }else{
                setCart([...cart, Prod]);
                 }
            
              }}
            >
              Add to Cart
            </Button>
      </>
  )
}

export default CheckToCart