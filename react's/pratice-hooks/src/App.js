
import React,{ useRef } from 'react';
import './App.css';
import RandomJokes from './RandomJokes';

function App() {
     var firstNameRef = useRef(null);
    var lastNameRef = useRef(null);
    const[firstName,setFirstName] = React.useState('ravi')
    const[lastName,setLastName] = React.useState('kumar')
    const joke = RandomJokes(firstName,lastName);
   
    const ShowJoke = (event) => {
      event.preventDefault();
      setFirstName (firstNameRef.current.value);
   
     setLastName (lastNameRef.current.value);
    }
  return (<>
    <div className="App">
      <h1 id="joke">
        {joke}
      </h1>
    <form >
      <input type="text"  ref={firstNameRef}/>
      <input type="text" ref={lastNameRef} />
      <button onClick={ShowJoke}>Show joke</button>
    </form>
    </div>
  </>
  );
}

export default App;
