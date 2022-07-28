import React from "react";
import styled from "styled-components";
import { Navbar, Nav, Button } from "react-bootstrap"
import logo from '../assets/logo.png'; 
import "../styles/style.css"
export default function NavBar(props) {

  function getClassName(page) {
    return (props.page === page)? "nav-link active" : "nav-link"
  }
 
  return(
    <Navbar
      bg="white"
      expand="lg"
      className="navbar justify-content-between"
    >
      <Navbar.Brand href="/" className="nav-logo-div">
        <img
          alt=""
          src={logo}
          className="nav-logo"
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle
        className="nav-toggle"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link
            className={getClassName("laboratorios")}
            href="/laboratoriosPage"
          >
            Laboratórios
          </Nav.Link>
          <Nav.Link
            className={getClassName("cursos")}
            href="/cursosPage"
          >
            Cursos
          </Nav.Link>
          <Nav.Link
            className={getClassName("quemSomos")}
            href="/quemSomosPage"
          >
            Quem somos
          </Nav.Link>
          <Nav.Link
            className={getClassName("publicacoes")}
            href="/publicacoesPage"
          >
            Publicações
          </Nav.Link>
          <Nav.Link
            className={getClassName("blog")}
            href="/blogPage"
          >
            Blog
          </Nav.Link>
          <Nav.Link
            className="nav-link mobile"
            href="/loginPage"
          >
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Button
        className="btn-login desktop"
        href="/loginPage"
      >
        Login
      </Button>{' '}
    </Navbar>
    
  );
}

const Container = styled.div`
.navbar {
    padding: 0 20px;
  }
  
  .nav-logo-div {
    max-width: 50%;
    margin: 10px 0 10px 20px;
  }
  
  .nav-logo {
    width: 200px;
  }
  
  .nav-link {
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: #000000 !important;
  }
  
  .nav-link:hover {
    color: #4285f4!important;
    transition-property: all;
    transition-duration: 0.5s;
  }
  
  .nav-toggle {
    border: none;
  }
  
  .btn-login {
    width: 200px;
    height: 50px;
    line-height: 40px;
    background-color: #34a853;
    border: none;
    border-radius: 73px;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    margin: 0 50px 0 0;
  }
  
  .btn-login a {
    color: #FFFFFF;
  }
  
  .btn-login:hover{
    background-color: #25803E;
    color: #FFFFFF;
  }
  
  .btn-login a:hover {
    text-decoration: none;
  }
  
  .btn-menu {
    display: none;
  }
  
  .desktop {
    display: block;
  }
  
  .mobile {
    display: none;
  }
  
  @media screen and (min-width:300px) and (max-width:991px) {
  
  
    .nav-item {
      background-color: #ffffff;
    }
  
    .navbar-nav {
      width: 100%;
      display: block;
      text-align: center;
    }
  
    .btn-login {
      display: none;
    }
  
    .btn-menu {
      display: block;
    }
  
    .nav-logo {
      height: 70%;
    }
  
    .desktop {
      display: none;
    }
  
    .mobile {
      display: block;
    }
  }
  
  .active {
    letter-spacing: 1px;
    font-weight: bold;
  }
  
  @media screen and (min-width:300px) and (max-width:401px) {
  
    .navbar {
      padding: 0 5px !important;
    }
  
  }
`;