import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navigation-bar">
        <button className="control-title" onClick={() => navigate(-1)}>
          <span>{"<"}</span>
          <h2>Страница не найдена</h2>
        </button>
      </div>

      <h1 style={{margin: "auto", fontSize: "20px"}}>Страница не найдена!</h1>

      <Footer />
    </>
  );
}
