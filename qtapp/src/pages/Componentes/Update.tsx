import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { actualizarUsuario, obtenerUsuario } from '../Firebase/Promises'
import { User } from '../Interfaces/IForm'



export const Update = () => {
  const params = useParams()
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [edad, setEdad] = useState("")
  const [errorNombre, setErrorNombre] = useState("")
  const [idUsuario, setIdUsuario] = useState("")
  useEffect(() => {
    if (params.idUsuario != undefined) {
      obtenerUsuario(params.idUsuario).then((v) => {
        if (v != undefined && v.idUsuario != undefined) {
          setNombre(v.nombre)
          setEmail(v.email)
          setEdad("" + v.edad)
          setIdUsuario(v.idUsuario)
        }
      })

    }
    //promesas que recuperan el objeto en base a un id
    //carguemos en cada estado su valor
  }, [])


  const actualizar = () => {

    if (nombre.trim() == "") {
      setErrorNombre("No valen espacios en blanco")
    } else {
      setNombre(nombre.trim())
    }

    //Asuman que se valido todo
    const p: User = {
      nombre,
      email,
      edad: parseInt(edad)
    }
    //actualizar
    actualizarUsuario(idUsuario, p).then(() => {
      alert("Se actualizo con exito")
    })
    //registrarUsuario(p)
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
      /><br />
      <label></label>

      <button type='button' onClick={actualizar}>Actualizar</button>
    </form>
  )
}
