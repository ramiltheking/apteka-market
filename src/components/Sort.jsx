import { useState, useEffect } from "react";

export function Sort({ setModalOpen, setModalTitle, setModalContent }) {
  const [sort, setSort] = useState(null);

  useEffect(() => {
    console.log("Сортировка:", sort);
  }, [sort]);

  return (
    <div
      className="sort"
      onClick={() => {
        setModalTitle("Сортировка");
        setModalOpen(true);
        setModalContent(
          <form className="sort-form">
            <label htmlFor="popular" className="inp-div">
              <input
                type="radio"
                id="popular"
                name="sort"
                value="popular"
                onChange={() => {
                  setSort("popular");
                }}
              />
              По популярности
            </label>
            <label htmlFor="price-high" className="inp-div">
              <input
                type="radio"
                id="price-high"
                name="sort"
                value="price-high"
                onChange={() => setSort("price-high")}
              />
              Сначала дорогие
            </label>
            <label htmlFor="price-low" className="inp-div">
              <input
                type="radio"
                id="price-low"
                name="sort"
                value="price-low"
                onChange={() => setSort("price-low")}
              />
              Сначала дешевые
            </label>
            <label htmlFor="price-disc" className="inp-div">
              <input
                type="radio"
                id="price-disc"
                name="sort"
                value="price-disc"
                onChange={() => setSort("price-disc")}
              />
              Выгодные товары со скидкой
            </label>
          </form>
        );
      }}
    >
      <label className="bar-title">
        <img src="/icons/sort.svg" alt="sort" />
        <p>Сортировать:</p>
      </label>
      <select
        id="sort"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <option value="popular">По популярности</option>
        <option value="price-high">Сначала дорогие</option>
        <option value="price-low">Сначала дешевые</option>
        <option value="price-disc">Выгодные товары со скидкой</option>
      </select>
    </div>
  );
}
