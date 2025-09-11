import { useState } from "react";

export function ChapterBtn({ type, value, text, filter, setFilter }) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setOpen((prev) => !prev);

    switch (type) {
      case "section":
        setFilter((prev) => {
          const sections = prev.section || [];
          return {
            ...prev,
            section: sections.includes(value)
              ? sections.filter((s) => s !== value)
              : [...sections, value],
          };
        });
        break;

      case "promotion":
        setFilter((prev) => ({ ...prev, promotion: !prev.promotion }));
        break;

      case "country":
        setFilter((prev) => {
          const countries = prev.country || [];
          return {
            ...prev,
            country: countries.includes(value)
              ? countries.filter((c) => c !== value)
              : [...countries, value],
          };
        });
        break;

      default:
        break;
    }
  };

  return (
    <button
      className={open ? "chapter-btn-open" : "chapter-btn"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
