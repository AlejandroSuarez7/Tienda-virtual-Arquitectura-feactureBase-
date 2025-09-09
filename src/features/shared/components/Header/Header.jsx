import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useCart } from '../../../cart/CartContext';
import CartModal from '../../../cart/CartModal';

export function Header() {
  const [open, setOpen] = useState(false);
  const { items } = useCart();
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        Rugby Base <img src="https://cdn-icons-png.flaticon.com/512/73/73509.png"/>
      </NavLink>
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
      <CartModal open={open} onClose={() => setOpen(false)} />
    </header>
  );
}