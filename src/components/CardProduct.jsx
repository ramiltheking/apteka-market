import "../css/CardProduct.css";

export function CardProduct({ img, title, href }) {
  return (
    <a
      style={{
        backgroundImage: `url( ${img} )`,
      }}
      className="card-product"
      href={href}
    >
      <p>{ title }</p>
    </a>
  );
}
