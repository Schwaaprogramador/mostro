import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [inputs, setInputs] = useState({
    name: '', 
    description: '', 
    price:"",

    size:"",
    genre:"", 
    category:"", 
    color:"", 
    
});

const [file, setFile] = useState(null);

  


  //------------------------IMAGEN INPUT LOGICAS--------------------------
  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  }
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   // Crear un nuevo usuario con la imagen cargada en el formulario
  //   const formData = new FormData();
  //   formData.append('avatar', file);
  //   const newUser = await User.create(formData);
  // }

  return (
    <>
        <form className={styles.form}>





            {/* ---------------------INPUT NAME---------------- */}

            <label htmlFor="name" className={styles.label}>Nombre: </label>
              <input 
                    type="text" 
                    className={styles.input}  
                    id="name" 
                    name="name" 
                    value={inputs.name} 
                     
                     />








            {/* ---------------------INPUT Descripcion---------------- */}

            <label htmlFor="email" className={styles.label}>DescripTion:</label>
            <input 
                    type="email" 
                    className={styles.input} 
                    id="email" name="email" 
                    value={inputs.description} 
                    />










            {/* ---------------------INPUT Price---------------- */}

            <label htmlFor="email" className={styles.label}>Price:</label>
            <input 
                  type="email" 
                  className={styles.input} 
                  id="email" 
                  name="email" 
                  value={inputs.price} 
                  />











            {/* ---------------------INPUT Image---------------- */}

            <label htmlFor="email" className={styles.label}>Image:</label>
            <input  
                  type="file" 
                  className={styles.input} 
                  id="email" 
                  name="image" 
                  onChange={handleFileInputChange} 
                   />
            
            









            {/* ---------------------INPUT Size---------------- */}
            <label htmlFor="email" className={styles.label}>Size:</label>
                    <select className={styles.input}>
                        <option value={inputs.size} >S</option>
                        <option value={inputs.size}>M</option>
                        <option value={inputs.size}>L</option>
                        <option value={inputs.size}>XL</option>
                    </select>

            





            {/* ---------------------INPUT Genre---------------- */}
            <label htmlFor="email" className={styles.label}>Genre:</label>
                    <select className={styles.input}> 
                        <option value={inputs.genre}></option>
                        <option value={inputs.genre}>MASCULINO</option>
                        <option value={inputs.genre}>FEMENINO</option>
                        
                    </select>











            {/* ---------------------INPUT Category---------------- */}
            <label htmlFor="email" className={styles.label}>Category:</label>
                    <select className={styles.input}>
                        <option value={inputs.category}></option>
                        <option value={inputs.category}>BUSO</option>
                        <option value={inputs.category}>CAMISA</option>
                        <option value={inputs.category}>PANTALON</option>
                        <option value={inputs.category}>GORRA</option>
                    </select>







            {/* ---------------------INPUT Color---------------- */}
            <label htmlFor="email" className={styles.label}>Color:</label>
                      <select className={styles.input}>
                        <option value={inputs.color}></option>
                        <option value={inputs.color}>NEGRO</option>
                        <option value={inputs.color}>BLANCO</option>
                        <option value={inputs.color}>AMARILLO</option>
                        <option value={inputs.color}>NARANJA</option>
                    </select>







              {/* ---------------------INPUT butoon---------------- */}
            <button type="submit" className={styles.button}>Enviar</button>


        </form>

    </>
    
  );
}

export default Contact;
