import React, { useContext, useEffect } from "react";
import { contactContext } from "../ContactContextProvider";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { getContcats, contacts } = useContext(contactContext);
  useEffect(() => {
    getContcats();
  }, []);
  console.log(contacts);

  return (
    <div className="container d-flex " style={{ flexWrap: "wrap" }}>
      {contacts.map((item) => {
        return (
          <div key={item.id}>
            <ContactCard key={item.id} {...item} />;
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
