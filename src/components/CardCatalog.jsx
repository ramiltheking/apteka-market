import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

export function CardCatalog({ img, title, href }) {
  const navigate = useNavigate();

  return (
    <Button
      className="card-catalog"
      onClick={() => navigate(`/catalog/${href}`)}
      style={{
        display:"flex",
        flexDirection:"column",
        width: "28vw",
        height: "140px",
        borderRadius: "14px",
        gap: "10px",
        overflow: "hidden",
        backgroundColor: " var(--inp-b)",
        color: "#2c2c2c",
        fontSize: "12px",
        fontWeight: "510",
        textDecoration: "none",
        textTransform: "none",
        fontFamily: "Inter",
      }}
    >
      <p>{title}</p>
      <div
        className="card-catalog-img"
        style={{ backgroundImage: `url('${img}')` }}
      ></div>
    </Button>
  );
}
