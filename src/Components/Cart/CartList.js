import React from "react";
import CartItem from "./CartItem";

function CartList(props) {
  const {value} = props;
  console.log(value);
  
  return (
      <div className="container-fluid">
        {value.map((item)=>{
          return(
            <CartItem key={item.id} item={item} value={props}/>
          )
        })}
      </div>
  );
}

export default CartList;
