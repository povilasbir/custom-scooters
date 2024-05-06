import React from 'react'
import { NavLink } from "react-router-dom"
import styles from './HeaderMenu.module.css'

function HeaderMenu() {
    return (
        <nav className={styles.headerMenu}>
            <ul>
                <li>
                    <NavLink to="/">Main</NavLink>
                </li>
                <li>
                    <NavLink to="/orders">Orders</NavLink>
                </li>
                <li>
                    <NavLink to="/parts">Parts</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">Contacts</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderMenu