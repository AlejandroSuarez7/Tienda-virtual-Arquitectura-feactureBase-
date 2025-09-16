import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './features/shared/layouts/MainLayout';
import { DashboardPage } from './features/dashboard/pages/DashboardPage';
import { ProductsPage } from './features/products/pages/ProductsPage';
import Nosotros from './features/Nosotros/pages/Nosotros'
import Contacto from './features/contacto/contact'


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="productos" element={<ProductsPage />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}

export default App;