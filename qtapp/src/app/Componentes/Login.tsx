import React from 'react'

interface Props {
  nombre: String | number,
  email: string,
  edad?: number,
  seleccion: string
}


export const Saludo = (props:Props) => {
  return (
    <div>Saludo {props.nombre} {props.email}</div>
  )
}