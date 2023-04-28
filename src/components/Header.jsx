import React, { useContext, useEffect, useState } from "react";
import { Container, Form, Navbar } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { contactContext } from "../ContactContextProvider";

const Header = () => {
  const [serachParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(serachParams.get("q") || "");
  const { getContcats } = useContext(contactContext);
  useEffect(() => {
    setSearchParams({ q: searchValue });
    getContcats();
  }, [searchValue]);

  return (
    <Navbar>
      <Container>
        <Link to={"/"}>
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Link to={"/add"}>
          <Navbar.Brand>Add Contact</Navbar.Brand>
        </Link>
        <Link to={"/counter"}>
          <Navbar.Brand>Counter</Navbar.Brand>
        </Link>
        <Form.Control
          value={searchValue}
          placeholder="Search..."
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </Container>
    </Navbar>
  );
};

export default Header;
