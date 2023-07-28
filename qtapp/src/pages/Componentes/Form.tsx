'use client'
import React, { useEffect, useState } from 'react'

import { registrarUser } from '../Firebase/Promises'
import { User } from '../Interfaces/IForm'


export const Form = () => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [edad, setEdad] = useState("")
  const [errorNombre, setErrorNombre] = useState("")
  const [seleccion, setSelect] = useState("")


  const registrar = () => {

    if (nombre.trim() == "") {
      setErrorNombre("Espacios en blanco invalido.")
    } else {
      setNombre(nombre.trim())
    }

    //Asuman que se valido todo
    const p: User = {
      nombre,
      email,
      edad: parseInt(edad)
      
      
    }
    registrarUser(p)
    console.log(nombre);
    console.log(email);
    console.log(edad);
    alert("Bienvenido " + nombre + " " + email);
  }
  const validarNombre = (valor: string) => {
    setNombre(valor);
    if (valor.length < 3) {
      setErrorNombre("Debe tener mas de 3 letras")
    }
    else {
      setErrorNombre("")
    }


  }
  return (
    <form>
      <label>Nombre: </label><br />
      <input type="text"
        onChange={(e) => validarNombre(e.target.value)}
        value={nombre}
      /><br />
      <span>{errorNombre}</span><br />
      <label>Email: </label><br />
      <input type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      /><br />

      <label>Edad: </label><br />
      <input type="number"
        onChange={(e) => setEdad(e.target.value)}
        value={edad}
      /><br />  <label >Password:</label><br/>
      <input
        type="password"
        pattern="[a-z0-9]{1,15}"
        title="Password should be digits (0 to 9) or alphabets (a to z)."
      /> <br/>


      <button type='button' onClick={registrar}>Registrar</button>
    </form>
  )
}