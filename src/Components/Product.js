import {React, useContext} from "react";
import { ProductContext } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

function Product({ product }) {
  const products = useContext(ProductContext);
  const { id, title, img, price, inCart } = product;
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5">
          <Link
            to="/details"
            onClick={() => products.handleDetail(id)}
          >
            <img src={img} alt="product" className="card-img-top" />
            {/* <h1>{title}</h1> */}
          </Link>
          <button
            className="card-btn"
            disabled={inCart ? true : false}
            onClick = {() => {
            products.addToCart(id);
            products.openModal(id);
            }
            }>
            {inCart ? (
              <p className="text-capitalize mb-0" disabled>
                in cart
              </p>
            ) : (
              <i className="p-1 fas fa-cart-plus" />
            )}
          </button>
        </div>
        {/* card footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">${price}</span>
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
}

export default Product;

Product.propTypes = {
  product: PropTypes.shape({ //.shape() is used when our prop is an object
    id:PropTypes.number,
    img:PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    ${'' /* transition: all 1s linear; */}
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }

    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 1s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    background: var(--lightBlue);
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    border:none;
    transform:translate(100%, 100%);
    transition: all 1s ease-in ;
  }

  .img-container:hover .card-btn{
    transform: translate(0%,0%)
  }
`;
