import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigations.module.css'

export const Navigations = () => {
  return (
    <nav className={styles.container}>
          
        <Link to={"/"}>
            <li>
                <a href="/" className={styles.link}>About</a>
            </li>
        </Link>
        <Link to={"/products"}>
            <li>
                <a href="/products" className={styles.link}>Products</a>
            </li>
        </Link>
          
        
</nav>
  )
}
