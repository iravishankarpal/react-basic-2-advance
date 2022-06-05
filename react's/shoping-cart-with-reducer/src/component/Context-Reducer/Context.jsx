  
import React, { createContext,  useReducer,  useState } from "react";
import { cartReducer } from "./Reducer";

export const CartStore = createContext([]);

function Context({ children }) {
  
  const [detail,setDetail] = useState([])

  const [cart, dispatch] = useReducer(cartReducer, [])

  return <CartStore.Provider value={{cart, dispatch,detail,setDetail}}>
   
    {children}
    
    </CartStore.Provider>;
}

export default Context;
