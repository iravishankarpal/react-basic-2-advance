import React from 'react'
import "./style.css"
import Rating from "./Rating"
import { Button } from 'react-bootstrap'
function Filter() {
  return (
    <div className='m-2 p-2 filter'>
      <div className='FilterLabel'> Filter <Button variant='outline-primary' > clear All</Button> </div><br />
       <div className="FilterInpusts">

       
          <input type="radio" name="Sort" id="Assending" />
          <span htmlFor="Assending"> Assending</span> <br />
          <input type="radio" name="Sort" id="Desending" />
          <span htmlFor="Desending"> Desending</span> <br />
          <input type="checkbox" name="fastDelivery" id="F-D" />  <span htmlFor="F-D"> Fast Delivery</span> <br />
          <input type="checkbox" name="freeDelivery" id="F-D" />  <span htmlFor="F-D"> Free Delivery</span> <br />
          <input type="radio" name="priceFilter" id="LowToHight" />  <span htmlFor="PLTH"> Price Low To High</span> <br />
          <input type="radio" name="priceFilter" id="HighToLow" />  <span htmlFor="PLTH"> Price Low To High</span> <br />

          <label htmlFor="Rating"> Rating </label>   
          <Rating/>
          </div>
    </div>
  )
}

export default Filter