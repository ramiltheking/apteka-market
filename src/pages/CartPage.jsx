import { useState, useEffect, useContext } from "react";
import { AppContext } from "../stores/AppContext";
import { Footer } from "../components/Footer";
import { CartSection } from "../components/CartSection";
import { Link } from "react-router-dom";

function CartPage() {
  const { delivery } = useContext(AppContext);

  const [totalPrice, setTotalPrice] = useState(0);
  const { cart, setCart } = useContext(AppContext);

  useEffect(() => {
    const total = cart.reduce((acc, p) => acc + p.value * p.price, 0);
    setTotalPrice(total);
  }, [cart]);

  function operPr(id, oper) {
    setCart((prev) =>
      prev.flatMap((p) => {
        if (p.id !== id) return p;

        if (oper === "+") {
          return { ...p, value: p.value + 1 };
        } else {
          // если 1 → удалить товар
          if (p.value === 1) {
            return [];
          }
          return { ...p, value: p.value - 1 };
        }
      })
    );
  }

  return (
    <>
      <div className="navigation-bar">
        <div className="navigation-head">
          <h2 className="navigation-title">Корзина</h2>
          <button className="cart-clear" onClick={()=>setCart([])}>
            Очистить <img src="/icons/clear.svg" alt="clear" />
          </button>
        </div>

        <div className="delivery-addr">
          <div className="addr-row">
            <img src="/icons/addr-icon.svg" alt="addr-icon" />

            <p>{delivery.addr}</p>

            <Link to="/list_phar">
              <img src="/icons/addr-icon-right.svg" alt="addr-icon-right" />
            </Link>
          </div>
          <p className="addr-row-time">
            Время доставки <span>~ {delivery.time} мин.</span>
          </p>
        </div>
      </div>

      <CartSection products={cart} operPr={operPr} total={totalPrice} />

      <Footer />
    </>
  );
}

export default CartPage;
