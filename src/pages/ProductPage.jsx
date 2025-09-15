import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "../css/ProductPage.css";

export function ProductPage() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // тут логика получения товара по айди с сервера

    setProduct({
      id: 1,
      name: "Витаминный комплекс \"Энергия Дня\"",
      desc: "Поддерживает иммунитет и общий тонус организма. Содержит витамины группы B, витамин C и магний для снижения усталости и повышения концентрации. Подходит для ежедневного применения.",
      img: ["/images/carousel_img1.png", "/images/carousel_img2.png"],
      price: 369.01,
      weight: 200.0,
      piece: false,
      hit: false,
      new: true,
      favorite: true,
      discount: { value: true, discount_value: -15, old_price: 1099.99 },
      delivery: {
        mode: false,
        time_wait: 30,
        time_arri: 60,
      },
      features: [
        "Без сахара",
        "Без ГМО",
        "Подходит для вегетарианцев",
        "Повышает работоспособность",
      ],
    });
  }, [id]);

  if (product) {
    return (
      <>
        {/* <div className="product-page-container"> */}
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
          
          <div className="product-navbar">
            <button className="control-title" onClick={() => navigate(-1)}>
              <img src="/icons/back.svg" alt="back" />
            </button>
            <div>
              <button className="share">
                <img src="/icons/share.svg" alt="share" />
              </button>
              <button className="product-heart">
                <img src="/icons/heart.svg" alt="heart" />
              </button>
            </div>
          </div>

          </Swiper>

          <div className="product-inform">
            <div className="product-labels">
              <div className="disc_new">
                {product.hit ? <span className="hit">HIT</span> : null}
                {product.new ? <span className="new">NEW</span> : null}
                {product.discount.value ? (
                  <span className="desc">
                    {product.discount.discount_value}%
                  </span>
                ) : null}
              </div>
              <h1>
                {product.name}, <span>{product.weight} г.</span>
              </h1>
              <div className="delivery-info">
                <img src="/icons/truck.svg" alt="truck" />
                <p>
                  Доставка:
                  <span>
                    {product.delivery.mode
                      ? product.delivery.time_wait
                      : "Сегодня"}
                  </span>
                </p>
              </div>
            </div>
            <p className="product-desc">{product.desc}</p>
            <ul className="product-features">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        {/* </div> */}

        <button className="pay-btn" style={{ justifyContent: "center", cursor: "pointer" }}>
          <div className="pay-price">
            <img src="/icons/add-to-busket.svg" alt="add-to-busket" />
            {product.discount.value ? (
              <p className="product-old-price">
                {product.discount.old_price} ₸
              </p>
            ) : null}
            <p>{product.price} ₸</p>
          </div>
        </button>

        <Footer />
      </>
    );
  }
}
