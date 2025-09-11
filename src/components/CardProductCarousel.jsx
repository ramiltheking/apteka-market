import { Link } from "react-router-dom";
import "../css/CardProductCarousel.css";

export function CardProductCarousel({ img, title, href }) {
  return (
    <Link
      style={{
        backgroundImage: `url( ${img} )`,
      }}
      className="card-product-carousel"
      to={href}
    >
      <p>{ title }</p>
    </Link>
  );
}
