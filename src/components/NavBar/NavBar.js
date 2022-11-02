import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='menu-navbar-container'>
            <h1 className='menu-title'>Critical Dice</h1>
            <ul className='menu-items'>
                <li>
                    <a href='' className='menu-list'>Dados</a>
                </li>
                <li>
                    <a href='' className='menu-list'>Accesorios</a>
                </li>
                <li>
                    <a href='' className='menu-list'>Mis Pedidos</a>
                </li>
            </ul>
    <CartWidget/>   
        </div>
    )
}

export default NavBar