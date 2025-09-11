import { useState } from "react";
import "../css/CardStrictCatalog.css";
import { Link } from "react-router-dom";

export function CardStrictCatalog({ product }) {
  const [favorite, setFavorite] = useState([1, 2]);

  return (
    <Link className="card-product-strict" to={`/products/${product.id}`}>
      <div className="product-strict-image">
        <img src={product.img} alt="product-img" />
        {product.hit ? <span className="hit">HIT</span> : null}
        {product.new ? <span className="hit">NEW</span> : null}
        {favorite.includes(product.id) ? (
          <button
            className="heart"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setFavorite(favorite.filter((item) => item !== product.id));
              console.log("Удалено!");
            }}
          >
            <img src="/icons/heart.svg" alt="heart" />
          </button>
        ) : null}
      </div>

      <div className="product-strict-info">
        <div className="name-label">
          <p className="name">
            {product.name}
            <span className="weight">, {product.weight} г.</span>
          </p>
        </div>
        <p className="piece">
          {product.piece ? "Цена за 1 шт." : "Цена за 1 кг."}
        </p>
      </div>

      <button className="price-btn">
        <div className="product-strict-price">
          <p className="price">{product.price.toFixed(2)} ₸</p>
          {product.discount.value ? (
            <div className="discount">
              <p className="old-price">{product.discount.old_price} ₸</p>
              <span className="discount-value">
                {product.discount.discount_value}%
              </span>
            </div>
          ) : null}
        </div>
        <img src="/icons/grocery.svg" alt="grocery" />
      </button>
    </Link>
  );
}
