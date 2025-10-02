import { Footer } from "../components/Footer";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../stores/AppContext";
import { useContext } from "react";

import Button from "@mui/material/Button";

function ProfilePage() {
  const navigate = useNavigate();
  const { user, theme, setTheme } = useContext(AppContext);

  return (
    <>
      <div className="navigation-bar">
        <button className="control-title" onClick={() => navigate(-1)}>
          <img src="/icons/back-reg.svg" alt="back-reg" />
          <h2>Профиль</h2>
        </button>
      </div>

      <section className="sectoin-profile">
        <div className="profile-data">
          <img width={110} src="/icons/NUser.svg" alt="NUser" />
          <div className="user-data">
            <p className="data-d">
              <img src="/icons/name.svg" alt="name" />{" "}
              {user.firstName + " " + user.lastName}
            </p>
            <p className="data-d">
              <img src="/icons/contact-phone.svg" alt="contact-phone" />{" "}
              {user.phone}
            </p>
            <p className="data-d">
              <Link to="/settings">
                <img src="/icons/settings.svg" alt="settings" />
                Настройки <img width={30} src="/icons/to.svg" alt="to" />
              </Link>
            </p>
            <Button
              variant="contained"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              Переключить тему
            </Button>
          </div>
        </div>

        <Button
          className="user-exit"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            width: "70%",
            maxWidth: "345px",
            height: "50px",
            borderRadius: "8px",
            backgroundColor: " #46b0fb1a",
            color: "#46b0fb",
            border: "none",
            position: "fixed",
            bottom: "100px",
            zIndex: "2",
            textTransform: "none",
            fontFamily:"Inter"
          }}
        >
          <img src="/icons/sign-in.svg" alt="exit" /> Выйти
        </Button>
      </section>

      <Footer />
    </>
  );
}

export default ProfilePage;
