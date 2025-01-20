import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";


function Navbar() {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-md-5 px-4 d-flex justify-content-between">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>

      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
          </span>
            My Cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
}

export default Navbar;

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.5rem; 
  }
  
`