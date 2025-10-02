import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AppProvider } from "./stores/AppContext";
import ULRoute from "./stores/ULRoute";
import { AnimatePresence, motion } from "framer-motion";
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
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <AppProvider>
        <Suspense
          fallback={
            <Stack spacing={1}>
              <Skeleton
                variant="text"
                width="70vw"
                height="10vh"
                sx={{ fontSize: "1rem", bgcolor: "grey.400" }}
              />
              <Skeleton
                sx={{ bgcolor: "grey.400" }}
                variant="circular"
                width="15vh"
                height="15vh"
              />
              <Skeleton
                sx={{ bgcolor: "grey.400" }}
                variant="rectangular"
                width="70vw"
                height="25vh"
              />
              <Skeleton
                sx={{ bgcolor: "grey.400" }}
                variant="rounded"
                width="70vw"
                height="25vh"
              />
            </Stack>
          }
        >
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="body"
                >
                  <HomePage />
                </motion.div>
              }
            />
            <Route
              path="/list_phar"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="body"
                >
                  <PharPage />
                </motion.div>
              }
            />
            <Route
              path="/catalog"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="body"
                >
                  <CatalogPage />
                </motion.div>
              }
            />
            <Route
              path="/catalog/:categ"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="body"
                >
                  <StrictCatalogPage />
                </motion.div>
              }
            />
            <Route
              path="/cart"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="body"
                >
                  <CartPage />
                </motion.div>
              }
            />
            <Route
              path="/products/:id"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="body"
                >
                  <ProductPage />
                </motion.div>
              }
            />
            <Route
              path="/favorites"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="body"
                >
                  <FavoritePage />
                </motion.div>
              }
            />

            <Route
              path="/register"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="body"
                >
                  <ULRoute login={false} element={<RegistrationPage />} />
                </motion.div>
              }
            />
            <Route
              path="/login"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="body"
                >
                  <ULRoute login={false} element={<LoginPage />} />
                </motion.div>
              }
            />
            <Route
              path="/profile"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="body"
                >
                  <ULRoute login={true} element={<ProfilePage />} />
                </motion.div>
              }
            />

            <Route
              path="*"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="body"
                >
                  <NotFoundPage />
                </motion.div>
              }
            />
          </Routes>
        </Suspense>
      </AppProvider>
    </AnimatePresence>
  );
}

export default App;
