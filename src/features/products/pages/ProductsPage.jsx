import React from 'react';
import ProductList from './ProductsList';
export function ProductsPage() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Catálogo de Productos</h1>
      <p style={{ textAlign: 'center' }}>
        Aquí se mostrará la lista de productos de la tienda.
        <ProductList />
      </p>
    </div>
  );
}