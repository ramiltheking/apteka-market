import { useState, useEffect } from "react";
import { CardStrictCatalog } from "./CardStrictCatalog";
import "../css/StrictCatalogSection.css";

export function StrictCatalogSection() {
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
        piece: false,
        hit: false,
        new: true,
        favorite: true,
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
        new: false,
        favorite: false,
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
        new: false,
        favorite: false,
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
        hit: false,
        new: true,
        favorite: false,
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
        new: false,
        favorite: false,
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
        new: true,
        favorite: false,
        discount: {
          value: false,
          discount_value: -15,
          old_price: 532.99,
        },
      },
    ]);
  }, []);

  return (
    <section className="strict-catalog">
      {products.map((p) => (
        <CardStrictCatalog key={p.id} product={p} />
      ))}
    </section>
  );
}
