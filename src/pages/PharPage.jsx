import { useState } from "react";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

export function PharPage() {
  const [deliveryListMode, setDeliveryListMode] = useState({
    mode: true,
  });
  const navigate = useNavigate();

  function btnDeliverySwitch(m) {
    setDeliveryListMode({ ...deliveryListMode, mode: m });
  }

  return (
    <>
      <div className="navigation-bar">
        <button className="control-title" onClick={() => navigate(-1)}>
          <span>{"<"}</span>
          <h2>Список аптек</h2>
        </button>

        <div className="control-mode">
          <button
            className={`btn-delivery ${deliveryListMode.mode ? "open" : ""}`}
            onClick={() => btnDeliverySwitch(true)}
          >
            На карте
          </button>
          <button
            className={`btn-delivery ${deliveryListMode.mode ? "" : "open"}`}
            onClick={() => btnDeliverySwitch(false)}
          >
            Списком
          </button>
        </div>
      </div>

      {deliveryListMode.mode ? (
        <div className="phar-map">
          <iframe
            title="map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A82c8e64ce455dc86160d1e8e415bc9c2494060b2e8a28c05d8ddc342cf9dc3b5&amp;source=constructor"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        </div>
      ) : (
        <div></div>
      )}

      <Footer />
    </>
  );
}
