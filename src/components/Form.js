import React from "react";
import './Form.css';

const Form = props => {

    const {inputs, setInputs} = props;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value 
      });
    }  

    return(
        <form>
            <div className="Input">
                <label htmlFor = "firstName"> Nombre </label>
                <input onChange = {onChange} type = "text" name = "firstName" />
            </div>
            <div className="Input">
                <label htmlFor = "lastName"> Apellido </label>
                <input onChange = {onChange} type = "text" name = "lastName"/>
            </div>
            <div className="Input">
                <label htmlFor = "email"> Email </label>
                <input onChange = {onChange} type = "text" name = "email" />                
            </div>

            <div className="Input">
                <label htmlFor = "password"> Clave </label>
                <input onChange = {onChange} type = "password" name = "password" />
            </div>

            <div className="Input">
                <label htmlFor = "confirmPassword"> Repetir clave </label>
                <input onChange = {onChange} type = "password" name = "confirmPassword" />
            </div>
        </form>
    )
};

export default Form;