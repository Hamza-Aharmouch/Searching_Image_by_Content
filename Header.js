import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Navbar,Nav,NavDropdown} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import '../Header.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Switch,
  HashRouter,
} from "react-router-dom";
import Cbir from './Cbir';
import Realizedby from './Realizedby';
import Conclusion from './Conclusion'

function Header(){

    return (
      <Router>
      <div className="header_nav">
        <Navbar
          fixed="top"
          variant="dark"
          sticky="top"
          expand="lg"
          collapseOnSelect
        >
          <Navbar.Brand
            className="brand"
            style={{ fontSize: 45, marginLeft: 42 }}
          >
            CBIR
          </Navbar.Brand>
          <NavbarToggle
            className="mr-3"
            aria-controls="responsive-navbar-nav"
          />
          <NavbarCollapse>
            <Nav style={{ fontSize: 21, marginLeft: 48 }}>
              <Nav.Link href="#" active>
                Introduction
              </Nav.Link>
              <Nav.Link as={Link}  to={"/Cbir"} active >
                Cbir
              </Nav.Link>
              <Nav.Link as={Link} to={"/Realizedby"} active >
                Realized by
              </Nav.Link>
              <Nav.Link as={Link}   to={"/Conclusion"} active >
                Conclusion
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </div>
      <div>
      <Routes>
          <Route path="/Cbir">
          element={Cbir}§
          </Route>
          <Route path="/Realizedby">
          element={Realizedby}

          </Route>
          <Route path="/Conclusion">
          element={Conclusion}

          </Route>
          
        </Routes>
      </div>
      </Router>
    );
}
export default Header;