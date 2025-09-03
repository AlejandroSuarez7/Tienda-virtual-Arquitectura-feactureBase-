import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './features/shared/layouts/MainLayout';
import { DashboardPage } from './features/dashboard/pages/DashboardPage';
import { ProductsPage } from './features/products/pages/ProductsPage';
import { CartPage } from './features/cart/pages/CartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="productos" element={<ProductsPage />} />
        <Route path="carrito" element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;