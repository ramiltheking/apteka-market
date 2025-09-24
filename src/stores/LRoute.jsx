// components/PrivateRoute.jsx
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import { useContext } from "react";

const LRoute = ({ element }) => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  if (user === null) {
    // Всё ещё загружается
    return <div>Загрузка...</div>;
  }

  if (user === true) {
    // Не авторизован
    navigate(-1);
  }

  // Авторизован
  return element;
};

export default LRoute;
