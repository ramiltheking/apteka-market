import "../css/CardProductCarousel.css";

export function CardProductCarousel({ img, title, href }) {
  return (
    <a
      style={{
        backgroundImage: `url( ${img} )`,
      }}
      className="card-product-carousel"
      href={href}
    >
      <p>{ title }</p>
    </a>
  );
}
