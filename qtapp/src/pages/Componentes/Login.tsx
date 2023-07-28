import React from 'react'

interface Props {
  nombre: String | number,
  email?: string,
  edad?: number,
  seleccion?: string
}


export const Login = (props:Props) => {
  return (
    <div>Saludo {props.nombre} {props.email} {props.edad} {props.seleccion}</div>
  )
}