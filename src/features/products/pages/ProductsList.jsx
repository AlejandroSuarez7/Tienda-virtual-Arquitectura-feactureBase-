import React from "react";
import ProductCard from "./ProductCards.jsx";
import products from "../../../products.json";

function ProductList() {
    return (
        <section id="productos" className="product-list">
        {products.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
        ))}
        </section>
    );
}

export default ProductList;
