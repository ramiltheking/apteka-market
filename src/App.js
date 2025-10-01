import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PharPage } from "./pages/PharPage";
import { CatalogPage } from "./pages/CatalogPage";
import { CartPage } from "./pages/CartPage";
import { ProductPage } from "./pages/ProductPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { StrictCatalogPage } from "./pages/StrictCatalogPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { LoginPage } from "./pages/LoginPage";
import { FavoritePage } from "./pages/FavoritePage";
import { ProfilePage } from "./pages/ProfilePage";

import { AppProvider } from "./stores/AppContext";
import ULRoute from "./stores/ULRoute";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list_phar" element={<PharPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:categ" element={<StrictCatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/favorites" element={<FavoritePage />} />

          <Route
            path="/register"
            element={<ULRoute login={false} element={<RegistrationPage />} />}
          />
          <Route
            path="/login"
            element={<ULRoute login={false} element={<LoginPage />} />}
          />
          <Route
            path="/profile"
            element={<ULRoute login={true} element={<ProfilePage />} />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
