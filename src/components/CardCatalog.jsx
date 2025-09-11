import { Link } from "react-router-dom";
import "../css/CardCatalog.css";

export function CardCatalog({ img, title, href }) {
  return (
    <Link
      className="card-catalog"
      to={`/catalog/${href}`}
    >
      <p>{title}</p>
      <div className="card-catalog-img" style={{backgroundImage: `url('${img}')`}}></div>
    </Link>
  );
}
