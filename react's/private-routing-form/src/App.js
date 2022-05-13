import './App.css';
import {
  Routes,
  // BrowserRouter,
  Route,
  NavLink,
  
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import PrivateRoute  from './PrivateRoute';
function App() {
  return (<>
    <div className="App">
      <div className="nav">

       <NavLink to='/'>Home</NavLink> 
     <br /> <NavLink to='/About'>About</NavLink>
     <br /> <NavLink to='/Contact'>Contact</NavLink>
      </div>
    {/* <BrowserRouter> */}
    <Routes>
        <Route>
            <Route path="/" element={<Home/>} />
            <Route element={<PrivateRoute/>} >
            <Route path="/contact" element={<Contact/>} />
            <Route path="/About" element={<About/>} />
            </Route>
        </Route>
    </Routes>
    {/* </BrowserRouter> */}
    </div>
    </>);
}

export default App;
