import react ,{useState}from "react"
import './App.css';
import Hello from "./hello";
import ReducerFunction from './useReducer';
// import Nesting from "./nesting"
// import folderStructure from './data'
// import folder from "./data"
// import user from "./userContext";
import Joke from "./Joke"
import { createContext } from "react";

export const User = createContext("hello innetial")


export  var list ={
  name:"ravi" ,
  lastName:"pal",
  fathers:"hari"
}
// expoeting menulist for rendering in other component 
export const menuList=()=>{return(<ul id="product">hellow
  <li className="menuList" id='home'>Home</li>
  <li className="menuList" id='about'>About</li>
  <li className="menuList" id='contact'>Contact</li>
  </ul>
 )}

function App() {
   const [textbox, settextbox] = react.useState("Type in the Text box above")
        const [value, setValue] = useState("iam context  by use state value")

  //  for passing this object  as link
   const big = {
     color : "red",
     fontSize: "33px",
     
   }
   
   return (<>
    <div className="App">
    <ReducerFunction/>
      {/* useing usestat for continues changing text of <p> with debounce of 2000ms  */}
            <input type="text" onChange={(e)=>{
                setTimeout(()=>{
                  settextbox(e.target.value)
                },1000,e)
               
              }

            } ></input>
            <br />
            {/* now showing it by debounce menthod */}
            <p style={big}>{textbox}</p>
            {/* testing props */}
        <Hello style={big} name={"ravi"} os={"kali"} job={"hack"}/>
      
    </div>

            <User.Provider value={{value,setValue}}>
            <Joke />
            </User.Provider>
            {/* <Nesting folder={folderStructure} /> */}

    </>
  );
}

export default App;
