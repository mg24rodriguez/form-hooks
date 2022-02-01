import React, { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import logo from './logo.png';
import './App.css';

function App() {
  const [ state, setState ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Ejercicio Formulario - Hooks </h1>
      </header>

      <h3> Escribe tus datos: </h3>
      <Form inputs = {state} setInputs = {setState}/>

      <h3> Tus datos son: </h3>
      <Results data = {state}/>


    </div>
  );
}

export default App;

