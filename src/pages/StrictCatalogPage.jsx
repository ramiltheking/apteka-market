import { StrictCatalogSection } from "../components/StrictCatalogSection";
import { SearchPanel } from "../components/SearchPanel";
import { Widgets } from "../components/Widgets";
import { Footer } from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function StrictCatalogPage() {
  const navigate = useNavigate();
  let { categ } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  useEffect(() => {
    // Тут логика получения категории с сервера

    setCategory({
      id: 1,
      name: "Лекарственные средства",
      img: "/images/catalog_img1.png",
      slug: "lecarstvtnnie-sredstva",
    });

     // Тут логика получения продуктов по категории с сервера

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
        favorite: true,
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
        favorite: false,
        discount: { value: true, discount_value: -15, old_price: 1099.99 },
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
        new: false,
        favorite: false,
        discount: { value: true, discount_value: -15, old_price: 1099.99 },
      },
      {
        id: 4,
        name: "Французский БАГЕТ свежеиспечененный",
        desc: "Французский БАГЕТ свежеиспечененный из муки вальяжной пшеницы",
        img: "/images/carousel_img1.png",
        price: 369.0,
        weight: 200.0,
        piece: true,
        hit: false,
        new: true,
        favorite: false,
        discount: { value: true, discount_value: -15, old_price: 1099.99 },
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
        new: false,
        favorite: false,
        discount: { value: true, discount_value: -15, old_price: 1099.99 },
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
        new: true,
        favorite: false,
        discount: { value: false, discount_value: -15, old_price: 532.99 },
      },
    ]);
  }, [categ]);

  return (
    <>
      <div className="navigation-bar">
        <button className="control-title" onClick={() => navigate(-1)}>
          <img src="/icons/back-reg.svg" alt="back-reg" />
          <h2>{category ? category.name : null}</h2>
        </button>
        <SearchPanel />
      </div>

      <StrictCatalogSection products={products} />

      <Widgets />
      <Footer />
    </>
  );
}

export default StrictCatalogPage;