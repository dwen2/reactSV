import React from "react";
import { Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Navbar.css";

function MyNavbar() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Navbar
        className="sticky-nav"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand as={Link} to="/">
          {t("Nepal Health Stats")}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/indicator">
              {t("Indicators")}
            </Nav.Link>
            {/* <Nav.Link href="#Map">Map</Nav.Link> */}
            <Nav.Link as={Link} to="/about">
              {t("About")}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              {t("Contact")}
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://healthviz-staging.herokuapp.com/admin">
              {t("Sign in")}
            </Nav.Link>
            <NavDropdown title="Languages" id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={() => i18n.changeLanguage("en")}>
                English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage("np")}>
                नेपाली
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            {/* <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                    </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
