import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counter);
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "sub" })}> - </button>
      <br />
      {state}
      <br />
      <button onClick={() => dispatch({ type: "add" })}>+ </button>
    </div>
  );
}

export default App;
