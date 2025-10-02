import { useContext } from "react";
import { AppContext } from "../stores/AppContext";
import { Link } from "react-router-dom";

export function CardCartSection({ product, operPr }) {
  const { favorite, setFavorite } = useContext(AppContext);

  return (
    <Link className="card-product-cart" to={`/products/${product.id}`}>
      <div className="product-cart-image">
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

      <div className="product-cart-display">
        <div className="product-cart-info">
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
          <div className="product-cart-price">
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
          <div className="product-operations">
            <span
              className="oper"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                operPr(product.id, "-");
              }}
            >
              {product.value===1 ? (<img src="/icons/clear.svg" alt="clear" width={16} />) : "-"}
            </span>
            {product.value} шт.
            <span
              className="oper"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                operPr(product.id, "+");
              }}
            >
              +
            </span>
          </div>
        </button>
      </div>
    </Link>
  );
}
