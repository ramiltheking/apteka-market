import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navigation-bar">
        <button className="control-title" onClick={() => navigate(-1)}>
          <img src="/icons/back-reg.svg" alt="back-reg" />
          <h2>Страница не найдена</h2>
        </button>
      </div>

      {/* <h1 style={{margin: "auto", fontSize: "20px"}}>Страница не найдена!</h1> */}
      <div
        className="cart-clear-div"
        style={{ marginBottom: "auto", marginTop: "auto" }}
      >
        <img src="/icons/notfound.svg" width={110} alt="404" />

        <div>
          <h2 className="cart-clear-title">Страница не найдена!</h2>
          <p className="cart-clear-desc">Попробуйте войти и она появится</p>
        </div>
      </div>

      <div className="cart-clear-widget">

        <Button
          className="sign-in"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            borderRadius: "16px",
            border: "none",
            background: "#46b0fb1a",
            width: "100%",
            padding: " 16px 0",
            textTransform: "none",
            fontFamily:"Inter"
          }}
          onClick={()=>navigate("/login")}
        >
          <img src="/icons/sign-in.svg" alt="sign-in" />
          <p>Войти</p>
        </Button>
      </div>

      <Footer />
    </>
  );
}

export default NotFoundPage;
