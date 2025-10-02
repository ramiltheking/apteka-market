import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import Button from "@mui/material/Button";
import { CardCartSection } from "../components/CardCartSection";

export function CartSection({ products, operPr, total }) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(products);
  }, [products]);

  function PayBtn() {
    return (
      <Button
        className="pay-btn"
        style={{
          position: "fixed",
          backgroundColor: "#46b0fb",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90vw",
          bottom: "100px",
          zIndex: "2",
          padding: " 12px 20px",
          textTransform: "none",
          fontFamily: "Inter",
        }}
        onClick={() => navigate("/cart/pay")}
      >
        <div className="pay-price">
          <img src="/icons/pay.svg" alt="pay" />
          <p>{total} ₸</p>
        </div>
        <hr />
        <Link className="pay-link" to="/cart/pay">
          Перейти к оформлению
        </Link>
      </Button>
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
                Выберите что-нибуть из аптек, что бы оформить заказ
              </p>
            </div>
          </div>

          <div className="cart-clear-widget">
            <Button
              className="sign-in"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                borderRadius: "16px",
                border: "none",
                background: "#46b0fb1a",
                width: "100%",
                padding: " 16px 0",
                textTransform: "none",
                fontFamily: "Inter",
              }}
              onClick={() => navigate("/login")}
            >
              <img src="/icons/sign-in.svg" alt="sign-in" />
              <p>Войти</p>
            </Button>
            <Button
              onClick={() => navigate("/catalog")}
              className="add-basket"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                borderRadius: "16px",
                border: "none",
                background: "#46b0fb",
                width: "100%",
                padding: "16px 0",
                textTransform: "none",
                fontFamily: "Inter",
              }}
            >
              <img src="/icons/add-to-busket.svg" alt="add-to-busket" />
              <p>За покупками</p>
            </Button>
          </div>
        </>
      )}
    </section>
  );
}
