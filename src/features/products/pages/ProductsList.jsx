import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCards.jsx";
import axios from "axios";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://api-para-tienda-rugby.onrender.com/api/products")
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Error al cargar productos. Intenta más tarde.");
                setLoading(false);
                console.error("Error al obtener productos:", err);
            });
    }, []);

    if (loading) return <div>Cargando productos...</div>;
    if (error) return <div>{error}</div>;

    return (
        <section id="productos" className="product-list">
        {products.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
        ))}
        </section>
    );
}

export default ProductList;
