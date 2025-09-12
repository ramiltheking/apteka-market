import { useState } from "react";
import { Footer } from "../components/Footer";
import {CartSection} from "../components/CartSection"
import { Link } from "react-router-dom";
import "../css/CartPage.css";

export function CartPage() {
  const [delivery, setDelivery] = useState({
    mode: false,
    addr: "г. Петропавловск, п. Прокофьева, ул. Жамбыла Жабаева, д. 142б",
    time: 30,
  });

  return (
    <>
      <div className="navigation-bar">
        <div className="navigation-head">
          <h2 className="navigation-title">Корзина</h2>
          <button className="cart-clear">
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
          
          <CartSection />

      <Footer />
    </>
  );
}
