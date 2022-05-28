import React, { createContext, useState } from 'react'

export const Cart = createContext([])
function Context({children}) {
    var [cart, setcart] = useState([])
  return (
    <Cart.Provider value={{cart,setcart}}>{children}</Cart.Provider>
  )
}

export default Context
