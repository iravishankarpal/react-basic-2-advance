import { useEffect } from "react";
function App() {
  useEffect(() => {
    fetch("/get")
    .then(res => res.json())
      .then(customers =>  console.log('Customers fetched...', customers));
  }, []);

  return <></>;
}

export default App;
