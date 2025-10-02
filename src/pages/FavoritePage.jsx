import { StrictCatalogSection } from "../components/StrictCatalogSection";
import { Widgets } from "../components/Widgets";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../stores/AppContext";

function FavoritePage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { favorite } = useContext(AppContext);

  useEffect(() => {

    // Тут логика получения продуктов по айди favorite с сервера

    setProducts([
      {
        id: 1,
        name: "Французский БАГЕТ свежеиспечененный",
        desc: "Французский БАГЕТ свежеиспечененный из муки вальяжной пшеницы",
        img: "/images/carousel_img2.png",
        price: 369.01,
        weight: 200.0,
        piece: false,
        hit: false,
        new: true,
        discount: { value: true, discount_value: -15, old_price: 1099.99 },
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
        new: false,
        discount: { value: true, discount_value: -15, old_price: 1099.99 },
      }
    ]);
  }, [favorite]);

  return (
    <>
      <div className="navigation-bar">
        <button className="control-title" onClick={() => navigate(-1)}>
          <img src="/icons/back-reg.svg" alt="back-reg" />
          <h2>Избранные товары</h2>
        </button>
      </div>

      <StrictCatalogSection products={products} />

      <Widgets />
      <Footer />
    </>
  );
}

export default FavoritePage;