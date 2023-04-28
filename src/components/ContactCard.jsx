import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { contactContext } from "../ContactContextProvider";

function ContactCard({ name, lastName, phone, id }) {
  const { deleteContact } = useContext(contactContext);
  return (
    <Card
      style={{
        width: "15rem",
        margin: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{lastName}</Card.Title>
        <Button variant="primary">{phone}</Button>
      </Card.Body>
      <Card.Body>
        <Button variant="success">Edit</Button>
        <Button
          variant="danger"
          onClick={() => {
            deleteContact(id);
          }}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
