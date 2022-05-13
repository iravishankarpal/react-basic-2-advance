import "./App.css";
import react from "react";
function App() {
  react.useEffect(() => {
    async function getData() {
      await fetch("/get");
    }
    getData();
  }, []);

  return <div className="App"></div>;
}

export default App;
