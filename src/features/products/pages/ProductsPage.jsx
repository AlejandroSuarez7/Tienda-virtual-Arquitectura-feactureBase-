import React, { useState } from 'react';
import ProductList from './ProductsList';
import "./stylesCards.css";
import { useCart } from '../../cart/useCart';
import CartModal from '../../cart/CartModal';
export function ProductsPage() {
  const { items } = useCart();
  const [open, setOpen] = useState(false);
  const totalItems = items.length;

  return (
    <div className="Titulos" style={{ position: 'relative' }}>
      <h1>Catálogo de Productos</h1>
      <p>
        Aquí se mostrará la lista de productos de la tienda.
      </p>
      <ProductList />

      {/* Botón flotante solo en móviles */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 1200,
          background: '#1abc9c',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
          fontSize: '2rem',
          display: 'none',
          cursor: 'pointer',
        }}
        className="cart-fab"
      >
        🛒
        {totalItems > 0 && (
          <span style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: '#e33',
            color: '#fff',
            borderRadius: '50%',
            padding: '2px 7px',
            fontSize: '1rem',
            minWidth: '24px',
            textAlign: 'center',
          }}>{totalItems}</span>
        )}
      </button>

      {/* Usar el mismo modal del carrito que en el resto de la app */}
      <CartModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}