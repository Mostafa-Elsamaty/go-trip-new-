import React, { Fragment } from "react";
import {  Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../imag/logo.png";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <div id="up" className="NavBar">

      <div className="col-lg-  top_nav">
        <Navbar className="Navbar" data-bs-theme="light">
          <Container>
            <Nav className="me-auto" >
              <Nav.Link className="nav_link" href="#home">
                needhelp@gotrip.com
              </Nav.Link>
              <Nav.Link className="nav_link" href="#features">
                666 569 025077
              </Nav.Link>
              <Nav.Link className="nav_link" href="#pricing">
                broklyn street new york
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#home"  >
                <FontAwesomeIcon className="nav_icon" icon={faTwitter} />
              </Nav.Link>
              <Nav.Link >
                <FontAwesomeIcon className="nav_icon"  icon={faLinkedinIn} />
              </Nav.Link>
              <Nav.Link >
                <FontAwesomeIcon className="nav_icon"  icon={faFacebookF} />
              </Nav.Link>
              <Nav.Link >
                <FontAwesomeIcon className="nav_icon"  icon={faPinterest} />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div className="botom_nav">
        <Navbar expand="lg" className="bg-body-white">
          <Container className="Container ">
            <Navbar.Brand href="#home">
              {" "}
              <img src={logo} alt="logo" />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="botom_nav_list ">
                <Link className="nav_list" to="/home" > <span>Home</span>  </Link>
                <Link className="nav_list" to="/about" > <span>about us </span> </Link>
                <Link className="nav_list"  to="/package" > <span>package </span></Link>
                <Link className="nav_list" to="/blog" > 
                <span>blog </span> 
                <div className="blogList">
                  <p> blog</p>
                  <p> blog ditails</p>
                </div>
                </Link>
                
                <Link className="nav_list"  to="/pages" > <span>pages </span>
                 <div className="pageList">
                  <p> element</p>
                </div>
                </Link>
               
                <Link className="nav_list"  to="/contact" ><span>contact us </span> 
                  
                  </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      
      </div>
    </Fragment>
  );
};

export default NavBar;
