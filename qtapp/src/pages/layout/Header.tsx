'use client'


import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../style/Header.module.css'


export const Header = () => {
    return (
        <header className={styles.container}>
            <div className='contenerdor'>
                <div>

                </div>

                <nav>
                    
                    <Link to={"/"}><a>Home  |  </a></Link>
                    <Link to={"/Formulario"}><a>Formulario  |  </a></Link>
                    <Link to={"/mostrar"}><a>Registros  |</a></Link>

                </nav>
            </div>
        </header>
    )
};

