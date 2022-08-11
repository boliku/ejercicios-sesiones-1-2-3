import React from "react";
import ContactComponent from "../component/ContactComponent";
import { Contact } from "../models/contactsClass";
import { useState } from "react";

const ContactContainer = () => {

  const [state, setState] = useState(false);

  const changeState = () => {
    setState(!state);
  };
  
  const defaultContact = new Contact('Exequiel', 'Cartisano', 'execartisano@gmail.com', state) 

  return (
    <div>
      <div>
      <h1>
        Contacto
      </h1>
      </div>
      <ContactComponent contact = { defaultContact }/>
      <div>
        <button onClick={changeState}>{!state ? 'Conectarse' :'Desconectarse'}</button>
      </div>
    </div>
  );

};

export default ContactContainer;
