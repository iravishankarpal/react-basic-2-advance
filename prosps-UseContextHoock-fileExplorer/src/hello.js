import React from 'react'
import {list,menuList} from "./App"

function hello(props) {

 
  return (<>

  {/* testing props */}
    <div>{props.name}</div>
    {/*AND imported list of links from app and provide link in there child element called event daligation  */}
    <div style={props.style} onClick={
      (event)=>{
        // here  providing event listner && links to parent and its child tags so it can change link 
        if(event.target.tagName==="LI"){

          window.location.href += "#" + event.target.id
          // adding to document window menthod to add "#" before link
        }
      }
    }>{menuList()}
    {/* menulsit is called from other component */}
    </div>
    {/* testing props in styling the div   */}
    <div style={props.style}>{list.fathers}</div>
    </>
  )
}

export default hello