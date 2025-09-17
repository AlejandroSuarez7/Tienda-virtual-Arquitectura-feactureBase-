import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { CartProvider } from '../../cart/CartContext';

export function MainLayout() {
  const layoutStyle = { 
    display: 'flex', 
    flexDirection: 'column', 
    minHeight: '100vh' 
  };
  const mainStyle = {
    flexGrow: 1,
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    paddingBottom: '2.5rem',
  };

  return (
    <CartProvider>
      <div style={layoutStyle}>
        <Header />
        <main style={mainStyle}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}