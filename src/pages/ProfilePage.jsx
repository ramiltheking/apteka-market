import { Footer } from "../components/Footer";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../stores/AppContext";
import { useContext } from "react";

import Button from '@mui/material/Button';

function ProfilePage() {
  const navigate = useNavigate();
  const { user, theme, setTheme } = useContext(AppContext);

  return (
    <>
      <div className="navigation-bar">
        <button className="control-title" onClick={() => navigate(-1)}>
          <span>{"<"}</span>
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
                <img src="/icons/settings.svg" alt="settings" />Настройки{" "}
                <img width={30} src="/icons/to.svg" alt="to" />
              </Link>
            </p>
            <Button variant="contained" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Переключить тему</Button>
          </div>
        </div>

        <button className="user-exit">
          <img src="/icons/sign-in.svg" alt="exit" /> Выйти
        </button>
      </section>

      <Footer />
    </>
  );
}

export default ProfilePage;
