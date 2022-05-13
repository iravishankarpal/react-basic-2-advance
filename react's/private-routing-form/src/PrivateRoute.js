import React from 'react'
import { Outlet ,useNavigate } from "react-router-dom"
function PrivateRoute() {

    const state = false
    const navigate = useNavigate();

  return (
    <div>
        {state ? <Outlet /> :  navigate("/") }
        
        
    </div>
  )
}

export default PrivateRoute