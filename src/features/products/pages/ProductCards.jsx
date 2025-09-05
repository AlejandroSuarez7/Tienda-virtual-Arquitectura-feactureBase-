import React from "react";
import "./stylesCards.css"
function ProductCard({ title, description, price, category, image, rating }) {
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
        </div>
        </article>
    );
}

export default ProductCard;