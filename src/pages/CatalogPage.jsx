import { CatalogSection } from "../components/CatalogSection";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

function CatalogPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navigation-bar">
        <button className="control-title" onClick={() => navigate(-1)}>
          <span>{"<"}</span>
          <h2>Каталог</h2>
        </button>
      </div>

      <CatalogSection />

      <Footer />
    </>
  );
}

export default CatalogPage;
