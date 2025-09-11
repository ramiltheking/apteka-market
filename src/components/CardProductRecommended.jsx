import { Link } from "react-router-dom";
import "../css/CardProductRecommended.css";

export function CardProductRecommended({ product }) {
  return (
    <Link className="card-product-recommended" to={`/products/${product.id}`}>
      <div className="product-image">
        <img src={product.img} alt="product-img" />
        {product.hit ? <span className="hit">HIT</span> : null}
      </div>

      <div className="product-info">
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
        <div className="product-price">
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
        <img src="/icons/grocery.svg" alt="grocery"/>
      </button>
    </Link>
  );
}
