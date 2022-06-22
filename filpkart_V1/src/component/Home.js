
import React from 'react'
import CartDetail from './CartDetail'
import Filter from './Filter'
import "./style.css"
function Home() {

    
  return (
    <div className='home-page'>
        <Filter></Filter>
        <CartDetail></CartDetail>
    </div>
  )
}

export default Home