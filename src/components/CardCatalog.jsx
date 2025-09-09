import "../css/CardCatalog.css";

export function CardCatalog({ img, title, href }) {
  return (
    <a
      className="card-catalog"
      href={`/catalog/${href}`}
    >
      <p>{title}</p>
      <div className="card-catalog-img" style={{backgroundImage: `url('${img}')`}}></div>
    </a>
  );
}
