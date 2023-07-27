import React, { useEffect, useState } from 'react'
import { obtenerUsuarios } from '../Firebase/Promises'
import { Link } from 'react-router-dom'
import { User } from '../Interfaces/IForm'

export const Records = () => {
    const [user, setUser] = useState<User[]>([])
    useEffect(() => {
        obtenerUsuarios().then((listado) => {
            console.log("Ya estoy listo")
            console.log(listado)
            setUser(listado)
        })

    }, [])

    const renderizarDatos = () => {
        var r = user.map((p) => {
            return <tr>
                <td>{p.nombre}</td>
                <td>{p.email}</td>
                <td>{p.edad}</td>
                <td><Link to={"/actualizar/" + p.idUsuario}>Actualizar</Link></td>
                <td><Link to={"/eliminar/" + p.idUsuario}>Eliminar</Link></td>
            </tr>
        })
        return r
    }

    return (
        <table>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Edad</th>
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
            {
                renderizarDatos()
            }
        </table>
    )
}
