import React from 'react';
import { useCart } from '../cart/useCart';

export default function CartModal({ open, onClose }) {
  const { items, total, removeFromCart } = useCart();
  if (!open) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
  <div style={{ background: '#fff', borderRadius: '8px', padding: '2rem', minWidth: '350px', maxWidth: '90vw', boxShadow: '0 2px 16px #aaa', position: 'relative', maxHeight: '80vh', overflowY: 'auto' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10, background: 'transparent', border: 'none', fontSize: 22, cursor: 'pointer' }}>×</button>
        <h2 style={{color:'black'}}>Carrito de compras</h2>
        {items.length === 0 ? (
          <p style={{color:'black'}}>El carrito está vacío.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, maxHeight: '55vh', overflowY: 'auto' }}>
            {items.map(item => (
              <li key={item.cartItemId} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                <img src={item.image} alt={item.title} style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 4, marginRight: 12 }} />
                <div style={{ flex: 1 }}>
                  <strong style={{color:'black'}}>{item.title}</strong>
                  <div style={{color:'black'}}>Precio: ${item.price}</div>
                </div>
                <button onClick={() => removeFromCart(item.cartItemId)} style={{ background: '#e33', color: '#fff', border: 'none', borderRadius: 4, padding: '0.3rem 0.7rem', cursor: 'pointer' }}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
        <div style={{ fontWeight: 'bold', fontSize: 18, marginTop: '1rem',color:'black' }}>
          Total: ${total}
        </div>
      </div>
    </div>
  );
}
