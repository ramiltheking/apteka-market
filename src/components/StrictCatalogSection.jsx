import { useState, useEffect, useRef } from "react";
import { CardStrictCatalog } from "./CardStrictCatalog";
import { Modal } from "./Modal";
import { Sort } from "./Sort";
import { Filter } from "./Filter";
import "../css/StrictCatalogSection.css";

export function StrictCatalogSection() {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const modalRef = useRef(null);
  const startY = useRef(0);

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
  }, []);

  // Закрытие кликом по фону
  function handleBackdropClick(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalOpen(false);
    }
  }

  // Ловим свайп вниз
  function handleTouchStart(e) {
    startY.current = e.touches[0].clientY;
  }
  function handleTouchEnd(e) {
    const endY = e.changedTouches[0].clientY;
    if (endY - startY.current > 100) {
      setModalOpen(false);
    }
  }

  return (
    <div className="catalog-s">
      <div className="bar-catalog">
        <Sort
          setModalOpen={setModalOpen}
          setModalTitle={setModalTitle}
          setModalContent={setModalContent}
        />
        <Filter
          setModalOpen={setModalOpen}
          setModalTitle={setModalTitle}
          setModalContent={setModalContent}
        />
      </div>

      <section className="strict-catalog">
        {products.map((p) => (
          <CardStrictCatalog key={p.id} product={p} />
        ))}
      </section>

      <Modal
        title={modalTitle}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        modalRef={modalRef}
        handleBackdropClick={handleBackdropClick}
        handleTouchStart={handleTouchStart}
        handleTouchEnd={handleTouchEnd}
      >
        {modalContent}
      </Modal>
    </div>
  );
}
