import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { actualizarUsuario, obtenerUsuario } from '../Firebase/Promises'
import { User } from '../Interfaces/IForm'

export const Actualizar = () => {
    const params = useParams()
    const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [edad, setEdad] = useState("")
  const [errorNombre, setErrorNombre] = useState("")
    const [idUsuario,setIdUsuario] = useState("")
  useEffect(()=>{
    if(params.idUsuario!=undefined){
       obtenerUsuario(params.idUsuario).then((v)=>{
        if(v!=undefined && v.idUsuario!= undefined){
            setNombre(v.nombre)
            setApellido(v.apellido)
            setEdad(""+v.edad)
            setIdUsuario(v.idUsuario)
        }
       })
    
    }
    //promesas que recuperan el objeto en base a un id
    //carguemos en cada estado su valor
  },[])
  
  
  const actualizar = ()=>{

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
    //actualizar
    actualizarUsuario(idUsuario,p).then(()=>{
        alert("Se actualizo con exito")
    })
    //registrarUsuario(p)
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

        <button type='button' onClick={actualizar}>Actualizar</button>
    </form>
  )
}
