import { useState, useRef } from "react";
import { CardStrictCatalog } from "./CardStrictCatalog";
import { Modal } from "./Modal";
import { Sort } from "./Sort";
import { Filter } from "./Filter";
import "../css/StrictCatalogSection.css";

export function StrictCatalogSection({ products }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const modalRef = useRef(null);
  const startY = useRef(0);

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
