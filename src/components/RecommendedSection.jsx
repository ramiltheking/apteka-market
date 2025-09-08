import { useState, useEffect } from "react";
import "../css/RecommendedSection.css";
import { CardProductRecommended } from "./CardProductRecommended";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
    ]);
  }, []);

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Swiper
        width={350}
        spaceBetween={10}
        slidesPerView={3.3}
        onSlideChange={(swiper) => {}}
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <CardProductRecommended key={p.id} product={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
