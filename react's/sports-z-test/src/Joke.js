import React, { useContext } from 'react'
import Nesting from "./Nesting"
import {User} from "./App"
function Joke() {
     
    const {value} = useContext(User)
  

  return (
    <div>
      Joke <br />
      {value}
      <h1> in joke page</h1>
      <Nesting/>
    </div>
  )
}

export default Joke