import React from 'react'

interface Props {
  nombre: string | number,
  email?: string,
  edad?: number,
  password?:string | number,
  seleccion?: string
}


export const Login = (props:Props) => {
  return (
    <div>Saludo {props.nombre} {props.email} {props.edad} {props.password} {props.seleccion}</div>
  )
}