import React, { useContext, useEffect } from 'react'
import { CartStore } from './Context-Reducer/Context';

function HeadeCartLength() {
    const {cart }  = useContext(CartStore)
  // console.log('cart from header :', cart.length);
  useEffect(() => {} , [cart])
  return (<>
    {
        cart.length > 0 ? <div className="cart-length">{cart.length}</div> : null
    }
  </>
  )
}

export default HeadeCartLength