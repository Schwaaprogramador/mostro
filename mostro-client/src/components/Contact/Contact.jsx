import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from './Contact.module.css';
import { postProducts } from "../../redux/productFetch";







//--------COMPONENTE------------
function Contact() {


  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: '', 
    description: '', 
    price:"",
    image:"",
    size:"",
    genre:"", 
    category:"", 
    color:"", 
    
});





//---------HANDLES-----------------------------------
const handleSubmit =  (evento) => {

    evento.preventDefault();
    dispatch(postProducts(inputs));

}

const handleInputs = (evento) => {

  setInputs({
      
      ...inputs,
      [evento.target.name]: evento.target.value, 
  })

}


  

  return (
    <>
        <form className={styles.form} onSubmit={handleSubmit}>





            {/* ---------------------INPUT NAME---------------- */}

            <label className={styles.label}>Nombre: </label>
              <input 
                    type="text" 
                    className={styles.input}  
                    onChange={handleInputs}
                    name="name" 
                    value={inputs.name} 
                     
                     />








            {/* ---------------------INPUT Descripcion---------------- */}

            <label  className={styles.label}>DescripTion:</label>
            <input 
                    type="text" 
                    className={styles.input} 
                    onChange={handleInputs}
                    name="description" 
                    value={inputs.description} 
                    />










            {/* ---------------------INPUT Price---------------- */}

            <label  className={styles.label}>Price:</label>
            <input 
                  type="text" 
                  className={styles.input} 
                  onChange={handleInputs}
                  name="price" 
                  value={inputs.price} 
                  />











            {/* ---------------------INPUT Image---------------- */}

            <label className={styles.label}>Image:</label>
            <input  
                  type="text" 
                  className={styles.input} 
                  name="image" 
                  onChange={handleInputs}
                   />
            
            









            {/* ---------------------INPUT Size---------------- */}
            <label  className={styles.label}>Size:</label>
                    <select className={styles.input}>
                        <option value={inputs.size} >S</option>
                        <option value={inputs.size}>M</option>
                        <option value={inputs.size}>L</option>
                        <option value={inputs.size}>XL</option>
                    </select>

            





            {/* ---------------------INPUT Genre---------------- */}
            <label  className={styles.label}>Genre:</label>
                    <select className={styles.input}> 
                        <option value={inputs.genre}></option>
                        <option value={inputs.genre}>MASCULINO</option>
                        <option value={inputs.genre}>FEMENINO</option>
                        
                    </select>











            {/* ---------------------INPUT Category---------------- */}
            <label  className={styles.label}>Category:</label>
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
