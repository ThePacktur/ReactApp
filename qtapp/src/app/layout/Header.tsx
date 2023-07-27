'use client'


import React from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {
    return (
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/formulario"}>Formulario</Link>
            <Link to={"/mostrar"}>Registros</Link>
        </nav>

    )
}
