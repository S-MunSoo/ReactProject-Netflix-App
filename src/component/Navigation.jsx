import React, { useState } from "react";
import {
  Navbar,
  Container,
  Form,
  Button,
  FormControl,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  // 영화 검색
  const goToSearch = (e) => {
    e.preventDefault();
    // let keyword = e.target.value;
    navigate(`/Movie?query=${search}`);
  };
  return (
    <Navbar variant="dark" expand="lg" className="nav-bar">
      <Container fluid>
        <Navbar.Brand href="/" className="nav-back">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo"
            width={110}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/Movie" className="nav-item">
              Movies
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={goToSearch}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
