import React, { useContext } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from './CartList'
import CartTotals from './CartTotals'
import { ProductContext } from "../../context";
// py-5 container

function Cart() {
  const products = useContext(ProductContext);
  // console.log(products)
  const { cart } = products;
  // console.log(cart);


  if (cart.length > 0) {
    return (
      <div className="container-fluid">
        <Title name="your" title="cart" />
        <CartColumns />
        <CartList value={cart}/> 
        <CartTotals value={products}/>
      </div>
    );
  }
  else{

  return (
    <EmptyCart/>
  );
}
}

export default Cart;
