import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CardCartSection } from "../components/CardCartSection";

export function CartSection({ products, operPr, total }) {
  useEffect(() => {
    console.log(products);
  }, [products]);

  function PayBtn() {
    return (
      <button className="pay-btn">
        <div className="pay-price">
          <img src="/icons/pay.svg" alt="pay" />
          <p>{total} ₸</p>
        </div>
        <hr />
        <Link className="pay-link" to="/cart/pay">
          Перейти к оформлению
        </Link>
      </button>
    );
  }

  return (
    <section className="cart-section">
      {products.length > 0 ? (
        <>
          {products.map((p) => (
            <CardCartSection key={p.id} product={p} operPr={operPr} />
          ))}
          <PayBtn />
        </>
      ) : (
        <>
          <div className="cart-clear-div">
            <img src="/icons/basket-clear.svg" alt="basket-clear" />

            <div>
              <h2 className="cart-clear-title">В корзине пусто!</h2>
              <p className="cart-clear-desc">
                Выберите что-нибутьиз аптек, что бы оформить заказ
              </p>
            </div>
          </div>

          <div className="cart-clear-widget">
            <Link to="/login" className="sign-in">
              <img src="/icons/sign-in.svg" alt="sign-in" />
              <p>Войти</p>
            </Link>
            <Link to="/catalog" className="add-basket">
              <img src="/icons/add-to-busket.svg" alt="add-to-busket" />
              <p>За покупками</p>
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
