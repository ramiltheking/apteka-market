import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useRef, useState } from "react";
import { CardProductCarousel } from "./CardProductCarousel";

export function ProductCarousel() {
  const swiperRef = useRef(null);
  const [showBackButton, setShowBackButton] = useState(false);

  const goToStart = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(0); // В начало
    }
  };

  const goToEnd = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.slideTo(swiper.slides.length - 1); // В конец
    }
  };

  const products = [
    { id: 1, img: "/images/carousel_img1.png", title: "Аптека в телефоне" },
    {
      id: 2,
      img: "/images/carousel_img2.png",
      title: "Витамины на каждый день",
    },
    { id: 3, img: "/images/carousel_img3.png", title: "Быстрая помощь рядом" },
    {
      id: 4,
      img: "/images/carousel_img4.png",
      title: "Здоровье без лишних хлопот",
    },
  ];

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Swiper
        ref={swiperRef}
        width={350}
        spaceBetween={10}
        slidesPerView={3.3}
        onSlideChange={(swiper) => {
          setShowBackButton(swiper.activeIndex > 0); // 👈 если не первый слайд — показать кнопку
        }}
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <CardProductCarousel img={p.img} title={p.title} href="#" />
          </SwiperSlide>
        ))}
      </Swiper>
      {showBackButton && (
        <button
          style={{
            background: "none",
            position: "absolute",
            top: "8px",
            zIndex: 1,
            left: 0,
            border: "none",
            cursor: "pointer",
            transform: "scale(-1)",
          }}
          onClick={goToStart}
          className="btn-to-end"
        >
          <img src="/icons/scroll-right.svg" alt="scroll-right"/>
        </button>
      )}
      {!showBackButton && (
        <button
          style={{
            background: "none",
            position: "absolute",
            top: "8px",
            zIndex: 1,
            right: 0,
            border: "none",
            cursor: "pointer",
          }}
          onClick={goToEnd}
          className="btn-to-end"
        >
          <img src="/icons/scroll-right.svg" alt="scroll-right"/>
        </button>
      )}
    </div>
  );
}
