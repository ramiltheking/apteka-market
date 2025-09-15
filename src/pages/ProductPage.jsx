import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Footer } from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import "swiper/css/pagination";
import "swiper/css";
import "../css/ProductPage.css";

export function ProductPage() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // тут логика получения товара по айди с сервера

    setProduct({
      id: 1,
      name: "Французский БАГЕТ свежеиспечененный",
      desc: "Французский БАГЕТ свежеиспечененный из муки вальяжной пшеницы",
      img: ["/images/carousel_img1.png", "/images/carousel_img2.png"],
      price: 369.01,
      weight: 200.0,
      piece: false,
      hit: false,
      new: true,
      favorite: true,
      discount: { value: true, discount_value: -15, old_price: 1099.99 },
    });
  }, [id]);

  return (
    <>
      <div className="product-container">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Pagination]} // 👈 подключаем
          pagination={{ clickable: true }} // 👈 включаем точки
          className="product-swiper"
        >
          {product &&
            product.img.map((i, idx) => (
              <SwiperSlide key={idx}>
                <img className="product-img" src={i} alt="img" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <Footer />
    </>
  );
}
