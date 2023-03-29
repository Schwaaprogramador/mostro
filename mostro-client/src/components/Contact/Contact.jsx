import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Aquí puedes agregar la lógica para enviar el formulario a través de una API o correo electrónico
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />

      <label htmlFor="email">Correo electrónico:</label>
      <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />

      <label htmlFor="message">Mensaje:</label>
      <textarea id="message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Contact;
