// import { Button } from 'bootstrap'
import React from "react";
import {
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Badge,
  
} from "react-bootstrap";
import { BsCartFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HeadeCartLength from "./HeadeCartLength";
import "./style.css";
const ReactIconContainer = styled.div`
  font-size: larger;
  color: white;
  margin-top: -5px !important;
  display: flex;
  align-items: center;
`;
function Header() {
  

return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand >
            <Link to="/" className="Link">

            Shopping-cart-with-reducer
            </Link>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Form className="d-flex ">
                <input
                  className="px-4 mx-1 py-1 searchBox"
                  type="search"
                  placeholder="Search"
                ></input>
                <ReactIconContainer>
                  <BsSearch />
                </ReactIconContainer>
              </Form>
            </Nav>
            <Nav>
              <Nav>
                <ReactIconContainer>
                <Link className="Link" to='/Cart'>
            
                  <BsCartFill /> <Badge bg="danger">
                    <HeadeCartLength />
                    </Badge>
                </Link>
                </ReactIconContainer>
              </Nav>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="profile" className="Link">
                    My Profile
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/wishlist" className="Link" variant="light">
                    Wishlist
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="order" className="Link">
                    Order
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Link to="/Reward" className="Link">
                    Reward
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  <Link to="/Dowload-app" className="Link">
                    Download app
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
