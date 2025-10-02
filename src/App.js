import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./stores/AppContext";
import ULRoute from "./stores/ULRoute";
import "./stores/Style";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const HomePage = lazy(() => import("./pages/HomePage"));
const PharPage = lazy(() => import("./pages/PharPage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const StrictCatalogPage = lazy(() => import("./pages/StrictCatalogPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Suspense
          fallback={
            <Stack spacing={1}>
              <Skeleton variant="text" width="70vw" height="10vh" sx={{ fontSize: "1rem", bgcolor: 'grey.400' }} />
              <Skeleton sx={{ bgcolor: 'grey.400' }} variant="circular" width="15vh" height="15vh" />
              <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rectangular" width="70vw" height="25vh" />
              <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width="70vw" height="25vh" />
            </Stack>
          }
        >
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
        </Suspense>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
