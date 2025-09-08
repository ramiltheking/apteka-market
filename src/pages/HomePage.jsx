import { useState } from "react";
import { Footer } from "../components/Footer";
import { ProductCarousel } from "../components/ProductCarousel";
import { SearchPanel } from "../components/SearchPanel";
import { RecommendedSection } from "../components/RecommendedSection";
import { Widgets } from "../components/Widgets";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

export function HomePage() {
  const [delivery, setDelivery] = useState({
    mode: false,
    addr: "г. Петропавловск, п. Прокофьева, ул. Жамбыла Жабаева, д. 142б",
    time: 30,
  });

  function btnDeliverySwitch(m) {
    setDelivery({ ...delivery, mode: m });
  }

  return (
    <>
      <div className="navigation-bar">
        <div className="control-mode">
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

      <ProductCarousel />

      <SearchPanel />

      <RecommendedSection />
      <RecommendedSection />
      <RecommendedSection />

      <Widgets />
      <Footer />
    </>
  );
}
