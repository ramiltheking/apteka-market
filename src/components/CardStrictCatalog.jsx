import { useContext } from "react";
import { AppContext } from "../stores/AppContext";
import { Link } from "react-router-dom";

export function CardStrictCatalog({ product }) {
  const { favorite, setFavorite } = useContext(AppContext);
  const { setCart } = useContext(AppContext);

  return (
    <Link className="card-product-strict" to={`/products/${product.id}`}>
      <div className="product-strict-image">
        <img src={product.img} alt="product-img" />
        {product.hit ? <span className="hit">HIT</span> : null}
        {product.new ? <span className="hit">NEW</span> : null}
        <button
          className={favorite.includes(product.id) ? "heart" : "heart-s"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setFavorite((prev) => {
              if (prev.includes(product.id)) {
                console.log("Удалено!");
                return prev.filter((item) => item !== product.id);
              } else {
                console.log("Добавлено!");
                return [...prev, product.id];
              }
            });
          }}
        >
          <img
            src="/icons/heart.svg"
            alt="heart"
          />
        </button>
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

      <button
        className="price-btn"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setCart((prev) => {
            const exist = prev.find((item) => item.id === product.id);

            if (exist) {
              return prev.map((item) =>
                item.id === product.id
                  ? { ...item, value: item.value + 1 }
                  : item
              );
            } else {
              return [
                ...prev,
                {
                  id: product.id,
                  name: product.name,
                  desc: product.desc,
                  img: product.img,
                  price: product.price,
                  weight: product.weight,
                  piece: product.piece,
                  hit: product.hit,
                  discount: {
                    value: product.discount.value,
                    discount_value: product.discount.discount_value,
                    old_price: product.discount.old_price,
                  },
                  value: 1,
                },
              ];
            }
          });

          console.log("Товар добавлен!");
        }}
      >
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
