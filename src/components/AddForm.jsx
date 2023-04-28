import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { contactContext } from "../ContactContextProvider";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  // todo Контекс для добавления в json
  const { addConTACT } = useContext(contactContext);

  const navigate = useNavigate();
  function handleValues() {
    if (!name.trim || !lastName.trim || !phone.trim) {
      alert("Заполните поля ");
      return;
    } else {
      const newObj = {
        name: name,
        lastName: lastName,
        phone: phone,
      };
      console.log(newObj);
      addConTACT(newObj);
      navigate("/");
    }
  }
  console.log(name, lastName, phone);
  return (
    <div className="container d-flex flex-column mt-5 align-item-center w-50  ">
      <h1>ADD CONTACT</h1>
      <Form.Control
        type="text"
        placeholder="name"
        className="mt-3"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Form.Control
        type="text"
        placeholder="lastname"
        className="mt-3"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <Form.Control
        type="text"
        placeholder="phone"
        className="mt-3"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <Button className="mt-3" onClick={handleValues}>
        Add Contact
      </Button>
    </div>
  );
};

export default AddForm;
