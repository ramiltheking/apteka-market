import { ChapterBtn } from "./ChapterBtn";
import { useState } from "react";

export function Filter({ setModalOpen, setModalTitle, setModalContent }) {
  const [filter, setFilter] = useState({
    section: [],
    promotion: false,
    country: [],
  });

  return (
    <label
      className="bar-title"
      onClick={() => {
        setModalTitle("Фильтры");
        setModalOpen(true);
        setModalContent(
          <div className="chapter">
            <h2 className="chapter-title">Разделы</h2>
            <div className="chapter-block">
              <ChapterBtn
                text="Лекарственные средства"
                type="section"
                value="medicines"
                setFilter={setFilter}
              />
              <ChapterBtn
                text="Витамины и БАДы"
                type="section"
                value="vitamins"
                setFilter={setFilter}
              />
              <ChapterBtn
                text="Товары для детей"
                type="section"
                value="children"
                setFilter={setFilter}
              />
              <ChapterBtn
                text="Средства гигиены"
                type="section"
                value="hygiene"
                setFilter={setFilter}
              />
              <ChapterBtn text="Косметика и дерматология" value="cosmetics" />
              <ChapterBtn
                text="Товары для женщин"
                type="section"
                value="women"
                setFilter={setFilter}
              />
              <ChapterBtn
                text="Товары для мужчин"
                type="section"
                value="men"
                setFilter={setFilter}
              />
              <ChapterBtn
                text="Средства для глаз и зрения"
                type="section"
                value="eye"
                setFilter={setFilter}
              />
            </div>
            <div className="chapter-block">
              <h2 className="chapter-title">Акции и товары со скидкой</h2>
              <ChapterBtn
                text="Скидки"
                type="promotion"
                value=""
                setFilter={setFilter}
              />
            </div>
            <div className="chapter-block">
              <h2 className="chapter-title">Страна</h2>
              <ChapterBtn
                text="Казахстан"
                type="country"
                value="kazahstan"
                setFilter={setFilter}
              />
              <ChapterBtn
                text="Россия"
                type="country"
                value="russia"
                setFilter={setFilter}
              />
              <ChapterBtn
                text="Китай"
                type="country"
                value="china"
                setFilter={setFilter}
              />
              <ChapterBtn
                text="Узбекситан"
                type="country"
                value="uzbekistan"
                setFilter={setFilter}
              />
              <ChapterBtn
                text="Таджикистан"
                type="country"
                value="tajikistan"
                setFilter={setFilter}
              />
            </div>
          </div>
        );
      }}
    >
      <img src="/icons/filter.svg" alt="filter" />
      <p>Фильтры</p>
    </label>
  );
}
