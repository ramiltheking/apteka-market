import { useState, useEffect } from "react";
import { CardProductRecommended } from "./CardProductRecommended";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

export function RecommendedSection() {
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
      },
    ]);
  }, []);

  return (
    <div style={{ width: "100%", position: "relative", gap: "20px" }}>
      <div className="recommended-title">
        <h2>Вам может понравиться</h2>
        <Link to="/catalog">Весь список {">"}</Link>
      </div>
      <Swiper width={350} slidesPerView="2.5">
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <CardProductRecommended key={p.id} product={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
