import React from "react";
import { useContext } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductContext } from "../context";
// import { ProductConsumer } from "../context";

function ProductList() {
  const { products } = useContext(ProductContext); // Access context value directly
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {products.map((product) => {
              return (
                  <Product key={product.id} product={product}/> 
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
