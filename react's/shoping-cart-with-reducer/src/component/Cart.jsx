import React, { useContext } from 'react'
// import { Button } from 'react-bootstrap';
import { CartStore } from './Context-Reducer/Context'
import styled from "styled-components"

const Button = styled
function CartPage() {
  const {cart} = useContext(CartStore)
  console.log('cart page:', cart);
  return (
    <div className=' cart-container  '>
      <div className=" cart-Deatil ">
        <div className="pincode">
          <h4>Dilevery in <input type="text" placeholder="Enter Pincode" /> </h4> <Button classname="Button  px-3 " varient='outline-primary'> Change </Button> 
        </div>

      </div>
      <div className=" price-detail ">
       <h3 className='p-2 m-2'>
          Price Details
         </h3>
        <hr />
        <div>
          <div>price ( {cart.length } Item)</div>
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
          <strong> total </strong>
        </div>
          <hr />
          <div className='text-success my-2' varient ="outline-success "> you have saved </div>
      </div>
 
    </div>
  )
}

export default CartPage