import React from 'react'
import {FaStar,FaRegStar} from "react-icons/fa"
function Rating() {
  return (
    <div>
    {/* {  [...Array(5)].map((star,index)=>{
      return <FaStar key={index}/>
    })}
         */}
      
      <FaStar/><FaStar/><FaStar/>    <FaRegStar/>
    </div>
  )
}

export default Rating