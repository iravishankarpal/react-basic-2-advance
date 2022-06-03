  
import React, { createContext,  useState } from "react";

export const CartStore = createContext([]);

function Context({ children }) {
  const [cart,setCart] = useState([]);
  const [detail,setDetail] = useState([])


  return <CartStore.Provider value={{cart,setCart,detail,setDetail}}>
   
    {children}
    
    </CartStore.Provider>;
}

export default Context;
