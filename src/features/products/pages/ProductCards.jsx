import React from "react";
import "./stylesCards.css";
import { useCart } from '../../cart/useCart';
function ProductCard({ title, description, price, category, image, rating, id }) {
    const { addToCart } = useCart();

    const handleAdd = () => {
        addToCart({ id, title, description, price, category, image, rating });
    };

    return (
        <article className="product-card">
        <div className="image-wrap">
            <img src={image} alt={title} />
        </div>
        <div className="product-body">
            <h3 className="prod-title">{title}</h3>
            <p className="category">{category}</p>
            <p className="desc">{description}</p>
            <div className="bottom-row">
            <p className="price">${price}</p>
            <p className="rating">⭐ {rating?.rate} ({rating?.count})</p>
            </div>
            <button
                onClick={handleAdd}
                style={{background: '#2d7',color: '#fff',border: 'none',borderRadius: '4px',padding: '0.5rem 1rem',cursor: 'pointer',marginLeft: '1rem',boxShadow: '0 1px 4px #bbb'}}>
                Agregar al carrito 🛒
            </button>
        </div>
        </article>
    );
}

export default ProductCard;