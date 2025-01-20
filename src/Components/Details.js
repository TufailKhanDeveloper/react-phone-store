import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { ProductContext } from "../context";
import styled from "styled-components";

function Details() {
  const products = useContext(ProductContext);
  const {
    id,
    company,
    img,
    info,
    price,
    title,
    inCart,
  } = products.detailProducts; //agr me yahan se addToCart ko add krunga to masla ayega bcz it is not the part of detailproduct
  const { addToCart, handleDetail } = products;

  return (
    <div className="container py-5">
      {/* title  */}
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>
      {/* end of title */}

      {/* product info */}
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <img src={img} className="img-fluid" alt="product"></img>
        </div>
        {/* Product text */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>model: {title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by : <span className="text-uppercase">{company}</span>
          </h4>

          <h4 className="text-blue">
            <strong>
              price : <span>${price}</span>
            </strong>
          </h4>

          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product
          </p>

          <p className="text-muted lead">{info}</p>
          {/* buttons */}
          <div>
            <Link to="/">
              <ButtonContainer>back to products</ButtonContainer>
            </Link>

            <ButtonCart
              disabled={inCart ? true : false}
              onClick={() => products.addToCart(id)}
            >
              {inCart ? "in cart" : "add to cart"}
            </ButtonCart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;


export const ButtonCart = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background:transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: var(--mainYellow);
  color: var(--mainYellow);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.8s ease-in-out;
  &:hover{
    background: var(--mainYellow)  ;
    color: var(--mainBlue);
  }
  &:focus{
    outline:none;
  }
`

/*
&:hover{
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
  &:focus{
    outline:none;
  }
*/ 