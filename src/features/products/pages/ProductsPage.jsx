import React from 'react';
import ProductList from './ProductsList';
import "./stylesCards.css";
export function ProductsPage() {
  return (
    <div className="Titulos">
      <h1>Catálogo de Productos</h1>
      <p>
        Aquí se mostrará la lista de productos de la tienda.
      </p>
      <ProductList />
    </div>
  );
}