import { useEffect } from "react";
import "./App.css";
// import axios from "axios"

function App() {
  // const [name, setName] = useState("   hello");
 async function getData(){
   await fetch("/get")
    .then((response) =>response.json())
    .then((data)=>console.log(data))


  }
  useEffect(() => {
    getData()
  
  }, [])
  
 
  
  return (
    <div className="App">
      I am front export default function first
     
    </div>
  );
}

export default App;
