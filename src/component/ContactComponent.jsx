import React from "react";
import { Contact } from "../models/contactsClass";
import PropTypes from "prop-types";
import { useState } from "react";

const ContactComponent = ({ contact }) => {

  

  return (
    <div>
      <h2>Nombre: { contact.name}</h2>
      <h3>Apellido: { contact.lastName }</h3>
      <h4>Email: { contact.email }</h4>
      <h5>Conectado: { contact.conect ? "Contacto En Línea" : "Contacto No Disponible"}</h5>
    </div>
  );
};

ContactComponent.prototype = {
  contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent;