import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useCart } from '../../../cart/CartContext';
import CartModal from '../../../cart/CartModal';

export function Header() {
  const [open, setOpen] = useState(false);           // para modal carrito
  const [menuOpen, setMenuOpen] = useState(false);   // para menú móvil
  const { items } = useCart();
  const totalItems = items.length;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
        Rugby Base <img src="https://cdn-icons-png.flaticon.com/512/73/73509.png" alt="logo"/>
      </NavLink>

      {/* Menú de escritorio */}
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Dashboard
        </NavLink>
        <NavLink to="/productos" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Productos
        </NavLink>
        <NavLink to="/Nosotros" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Nosotros
        </NavLink>
        <NavLink to="/Contacto" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Contacto
        </NavLink>
        <button
          onClick={() => setOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            marginLeft: '1rem',
            fontSize: 18
          }}
        >
          🛒
          {totalItems > 0 && (
            <span style={{
              position: 'absolute',
              top: -8,
              right: -8,
              background: '#e33',
              color: '#fff',
              borderRadius: '50%',
              padding: '2px 7px',
              fontSize: 12
            }}>{totalItems}</span>
          )}
        </button>
      </nav>

      {/* Botón hamburguesa */}
      <div
        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú móvil desplegable */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Dashboard
        </NavLink>
        <NavLink to="/productos" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Productos
        </NavLink>
        <NavLink to="/Nosotros" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Nosotros
        </NavLink>
        <NavLink to="/Contacto" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Contacto
        </NavLink>        
        <button
          onClick={() => { setOpen(true); setMenuOpen(false); }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            fontSize: 18
          }}
        >
          🛒
          {totalItems > 0 && (
            <span style={{
              position: 'absolute',
              top: -8,
              right: -8,
              background: '#e33',
              color: '#fff',
              borderRadius: '50%',
              padding: '2px 7px',
              fontSize: 12
            }}>{totalItems}</span>
          )}
        </button>
      </div>

      <CartModal open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
