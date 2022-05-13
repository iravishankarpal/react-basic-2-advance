import React from 'react'
import {useContext}  from 'react'
import {User} from "./App"

function Nesting() {

        const {value ,setValue}= useContext(User)
    
    return(<>
        <div> 
            {
                value  
            }
        </div>
        <button onClick={()=>{setValue("hai")}}> change above text by usecontes hoock</button>
   
    </>)
   
}

export default Nesting

