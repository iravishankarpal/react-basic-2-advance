import React ,{useReducer} from 'react';
import './App.css';



// for testing reducer

function App() {

  const functionReducer =(state,action)=>{
  console.log('action before manuplation :', action);
  console.log('state befre manuplation:', state);
    
    if(action.type ==="Add_count"){
        return {count : state.count += 1}
    }
    if (action.type==="Sub_count"){
      return {count: state.count -= 1}
    }
    console.log('state after manuplation  :', state);
    return state
    
  } 
  const [state,dispatch] = useReducer(functionReducer,{ count : 1})
  
  return (
    <div className="App">
      <button onClick={()=>{
        dispatch({type : "Add_count"}) 
      }}>   +   Add_button </button>

      <div>{state.count}</div>

      <button onClick={()=>{
        dispatch({type:"Sub_count"})
      }}>   -  sub_button </button>
    </div>
  );
}

export default App;
