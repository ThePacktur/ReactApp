'use client'
import React, { useEffect,useState } from 'react'
import {User} from '../Interfaces/IForm'
import { registrarUser } from '../Firebase/Promises'

export const Form = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState("")
    const [errorNombre, setErrorNombre] = useState("")
  
    
    
    const registrar = ()=>{
  
      if(nombre.trim()==""){
        setErrorNombre("No valen espacios en blanco")
      }else{
        setNombre(nombre.trim())
      }
  
      //Asuman que se valido todo
      const p:User = {
          nombre,
          apellido,
          edad:parseInt(edad)
      }
      registrarUser(p)
      console.log(nombre);
      console.log(apellido);
      console.log(edad);
      alert("Bienvenido "+nombre+" "+apellido);
    }
    const validarNombre = (valor:string)=>{
      setNombre(valor);
      if(valor.length<3){
        setErrorNombre("Debe tener mas de 3 letras")
      }
      else{
        setErrorNombre("")
      }
  
  
    }
    return (
      <form>
          <label>Nombre: </label><br/>
          <input type="text" 
            onChange={(e)=>validarNombre(e.target.value)}
            value={nombre}
            /><br/>
          <span>{errorNombre}</span><br/>
          <label>Apellido: </label><br/>
          <input type="text"
            onChange={(e)=>setApellido(e.target.value)}
            value={apellido}
          /><br/>
          
          <label>Edad: </label><br/>
          <input type="number"
            onChange={(e)=>setEdad(e.target.value)}
            value={edad}
            /><br/>
  
          <button type='button' onClick={registrar}>Registrar</button>
      </form>
    )
  }