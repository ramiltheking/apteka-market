import { AppContext } from "./AppContext";
import { useContext } from "react";
import { NotFoundPage } from "../pages/NotFoundPage";

const ULRoute = ({ element, login }) => {
  const { user } = useContext(AppContext);
  // const navigate = useNavigate();

  if ((user !== null && login) || (user === null && !login)) {
    return element;
  }

  else if ((user !== null && !login) || (user === null && login)) {
    // авторизован
    // return <Navigate to="/" replace />
    // navigate(-1);
    return <NotFoundPage />
  }

  else return null;
};

export default ULRoute;
