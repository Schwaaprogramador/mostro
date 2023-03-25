import React from 'react'
import styled from './Contact.module.css'

function Contact() {
  return (
    <div className={styled.container}>
        <form action="#" method="post">
          <h2>Contacto</h2>
          <label for="name">Nombre:</label>

          <input type="text" id="name" name="name" required/>
          <label for="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required/>
          <label for="message">Mensaje:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Contact
