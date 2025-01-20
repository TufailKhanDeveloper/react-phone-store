import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Cart from "./Components/Cart/Cart";
import Default from "./Components/Default";
import Modal from "./Components/Modal";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/:id"  element={<Default/>}/>
      </Routes> 
      <Modal/> 
    </>
  );
}

export default App;
