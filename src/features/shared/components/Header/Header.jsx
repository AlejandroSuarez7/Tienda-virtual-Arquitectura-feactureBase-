import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        Tienda Deportiva
      </NavLink>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Dashboard
        </NavLink>
        <NavLink to="/productos" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Productos
        </NavLink>
        <NavLink to="/carrito" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Carrito
        </NavLink>
      </nav>
    </header>
  );
}