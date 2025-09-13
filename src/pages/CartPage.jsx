import { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { CartSection } from "../components/CartSection";
import { Link } from "react-router-dom";
import "../css/CartPage.css";

export function CartPage() {
  const [delivery, setDelivery] = useState({
    mode: false,
    addr: "г. Петропавловск, п. Прокофьева, ул. Жамбыла Жабаева, д. 142б",
    time: 30,
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "Французский БАГЕТ свежеиспечененный",
        desc: "Французский БАГЕТ свежеиспечененный из муки вальяжной пшеницы",
        img: "/images/carousel_img2.png",
        price: 369.01,
        weight: 200.0,
        piece: true,
        hit: true,
        discount: {
          value: true,
          discount_value: -15,
          old_price: 1099.99,
        },
        value: 2,
      },
      {
        id: 2,
        name: "Французский БАГЕТ свежеиспечененный",
        desc: "Французский БАГЕТ свежеиспечененный из муки вальяжной пшеницы",
        img: "/images/carousel_img1.png",
        price: 369.0,
        weight: 200.0,
        piece: true,
        hit: true,
        discount: {
          value: true,
          discount_value: -15,
          old_price: 1099.99,
        },
        value: 2,
      },
      {
        id: 3,
        name: "Французский БАГЕТ свежеиспечененный",
        desc: "Французский БАГЕТ свежеиспечененный из муки вальяжной пшеницы",
        img: "/images/carousel_img1.png",
        price: 369.0,
        weight: 200.0,
        piece: true,
        hit: true,
        discount: {
          value: true,
          discount_value: -15,
          old_price: 1099.99,
        },
        value: 2,
      },
      {
        id: 4,
        name: "Французский БАГЕТ свежеиспечененный",
        desc: "Французский БАГЕТ свежеиспечененный из муки вальяжной пшеницы",
        img: "/images/carousel_img1.png",
        price: 369.0,
        weight: 200.0,
        piece: true,
        hit: true,
        discount: {
          value: true,
          discount_value: -15,
          old_price: 1099.99,
        },
        value: 2,
      },
      {
        id: 5,
        name: "Французский БАГЕТ свежеиспечененный",
        desc: "Французский БАГЕТ свежеиспечененный из муки вальяжной пшеницы",
        img: "/images/carousel_img1.png",
        price: 369.0,
        weight: 200.0,
        piece: true,
        hit: true,
        discount: {
          value: true,
          discount_value: -15,
          old_price: 1099.99,
        },
        value: 2,
      },
      {
        id: 6,
        name: "Французский БАГЕТ свежеиспечененный",
        desc: "Французский БАГЕТ свежеиспечененный из муки вальяжной пшеницы",
        img: "/images/carousel_img1.png",
        price: 369.0,
        weight: 200.0,
        piece: true,
        hit: false,
        discount: {
          value: false,
          discount_value: -15,
          old_price: 532.99,
        },
        value: 2,
      },
    ]);
  }, []);

  function totalP() {}

  useEffect(() => {
    const total = products.reduce((acc, p) => acc + p.value * p.price, 0);
    setTotalPrice(total);
  }, [products]);

  function operPr(id, oper) {
    setProducts((prev) =>
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
          <button className="cart-clear" onClick={()=>setProducts([])}>
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

      <CartSection products={products} operPr={operPr} total={totalPrice} />

      <Footer />
    </>
  );
}
