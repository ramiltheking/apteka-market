import { useState, useEffect } from "react";
import { CardCatalog } from "./CardCatalog";
import "../css/CatalogSection.css";

export function CatalogSection() {
  const [catalogs, setCatalogs] = useState([]);

  useEffect(() => {
    setCatalogs([
      {
        id: 1,
        name: "Лекарственные средства",
        img: "/images/catalog_img1.png",
        slug: "lecarstvtnnie-sredstva"
      },
      {
        id: 2,
        name: "Витамины и БАДы",
        img: "/images/catalog_img2.png",
        slug: "vitamini_i_badi"
      },
      {
        id: 3,
        name: "Товары для детей",
        img: "/images/catalog_img3.png",
        slug: "tovari_dlya_detei"
      },
      {
        id: 4,
        name: "Средства гигиены",
        img: "/images/catalog_img4.png",
        slug: "sredstva_gigieni"
      },
      {
        id: 5,
        name: "Косметика и дерматология",
        img: "/images/catalog_img5.png",
        slug: "kosmetika_i_dermatologiya"
      },
      {
        id: 6,
        name: "Товары для женщин",
        img: "/images/catalog_img3.png",
        slug: "tovari_dlya_zhenchin"
        },
      {
        id: 7,
        name: "Лекарственные средства",
        img: "/images/catalog_img5.png",
        slug: "lecarstvtnnie-sredstva"
      },
      {
        id: 8,
        name: "Витамины и БАДы",
        img: "/images/catalog_img1.png",
        slug: "vitamini_i_badi"
      },
      {
        id: 9,
        name: "Товары для детей",
        img: "/images/catalog_img2.png",
        slug: "tovari_dlya_detei"
      },
      {
        id: 10,
        name: "Средства гигиены",
        img: "/images/catalog_img4.png",
        slug: "sredstva_gigieni"
      },
      {
        id: 11,
        name: "Косметика и дерматология",
        img: "/images/catalog_img5.png",
        slug: "kosmetika_i_dermatologiya"
      },
      {
        id: 12,
        name: "Товары для женщин",
        img: "/images/catalog_img2.png",
        slug: "tovari_dlya_zhenchin"
      },
    ]);
  }, []);

  return (
    <section className="catalog">
      {catalogs.map((catalog) => (
        <CardCatalog key={catalog.id} img={catalog.img} title={catalog.name} href={catalog.slug} />
      ))}
    </section>
  );
}
