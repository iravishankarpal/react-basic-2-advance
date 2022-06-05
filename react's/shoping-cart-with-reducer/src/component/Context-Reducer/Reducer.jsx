export const cartReducer =(cart, action)=>{
    switch(action.type){
        case 'ADD':
            return [...cart,{ ...action.payload ,qty:1} ] 
        case 'REMOVE_FROM_CART':

        return cart.filter(((c)=> c.id !== action.payload.id ))
        case "UPDATE_QTY":
            return cart.map((c)=>{  
                if(c.id === action.payload.id){ 
                    return {...c, qty:action.payload.qty}
                }
                else{
                    return c
                }
            })
          default:
                return cart
    }
}
