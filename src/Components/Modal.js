  import React, { useContext, useState } from 'react'
  import styled from 'styled-components'
  import { ButtonContainer } from './Button'
  import { Link } from 'react-router-dom'
  import { ProductContext, ProductProvider } from '../context'
  import { ButtonCart } from './Details'
  import Cart from './Cart/Cart'


  function Modal() {
    const products = useContext(ProductContext);
    
    const {modalOpen, closeModal} = products;
    const {img, title, price} = products.modalProduct;
    if(!modalOpen){
      return null;
    }
    else{
      return(
      <ModalContainer onClick={()=>closeModal()}>
    <div className="container">
      <div className="row">
        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
            <h5>Item Added To The Cart</h5>
            <img src={img} className=" img-fluid"  alt="product" />
            <h5>{title}</h5>
            <h5 className='text-muted'>$price: {price}</h5>

            <Link to='/'>
              <ButtonContainer onClick={()=>{closeModal()}}>
                continue shopping
              </ButtonContainer>
            </Link>
            <Link to="/cart">
              <ButtonCart onClick={()=>{closeModal()}}>
                go to Cart
              </ButtonCart>
              </Link>
        </div>
      </div>
    </div>
      </ModalContainer>
      )
    }
  }

  export default Modal

  const ModalContainer = styled.div`
    position: fixed;    
    top: 0;
    left:0;
    right:0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items:center;
    justify-content: center;
    #modal{
    border-radius:25px;
      background: var(--mainWhite); 
    }
  `