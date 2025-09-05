import { useState } from "react";
import { Footer } from "../components/Footer";
import { ProductCarousel } from "../components/ProductCarousel";
import "../css/HomePage.css";

export function HomePage() {
  const [delivery, setDelivery] = useState({
    mode: false,
    adress: "г. Петропавловск, п. Прокофьева, ул. Жамбыла Жабаева, д. 142б",
    time: 0,
  });

  function btnDeliverySwitch(m) {
    setDelivery({ ...delivery, mode: m }); 
  }

  return (
    <>
      <div>
        <button
          className={`btn-delivery ${delivery.mode ? "open" : ""}`}
          onClick={() => btnDeliverySwitch(true)}
        >
          Доставка
        </button>
        <button
          className={`btn-delivery ${delivery.mode ? "" : "open"}`}
          onClick={() => btnDeliverySwitch(false)}
        >
          Самовывоз
        </button>
      </div>

      <div className="delivery-addr">
        <p>{delivery.addr}</p>
        <p>
          Время доставки <span>~ {delivery.time} мин.</span>
        </p>
      </div>

      <ProductCarousel />

      <Footer />
    </>
  );
}
