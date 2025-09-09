import { StrictCatalogSection } from "../components/StrictCatalogSection";
import { SearchPanel } from "../components/SearchPanel";
import { Widgets } from "../components/Widgets";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

export function StrictCatalogPage() {
  const navigate = useNavigate();
  // let { category } = useParams();

  return (
    <>
      <div className="navigation-bar">
        <button className="control-title" onClick={() => navigate(-1)}>
          <span>{"<"}</span>
          <h2>Каталог</h2>
        </button>
        <SearchPanel />
      </div>

      <StrictCatalogSection />

      <Widgets />
      <Footer />
    </>
  );
}
