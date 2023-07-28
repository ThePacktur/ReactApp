'use client'

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../Componentes/Login'
import { Form } from '../Componentes/Form'
import { Records } from '../Componentes/Records'
import { Update } from '../Componentes/Update'
export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<Login nombre={"Packtur"} />} />
      <Route path='/Formulario' element={<Form />} />
      <Route path='/mostrar' element={<Records />} />
      <Route path='/actualizar/:idUsuario' element={<Update />} />
    </Routes>
  )
}
