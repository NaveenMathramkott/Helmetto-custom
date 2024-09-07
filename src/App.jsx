import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const AuthPage = lazy(() => import("./pages/LoginRegister"));
const ShopGridPage = lazy(() => import("./pages/ShopGridPage"));
const Product = lazy(() => import("./components/product/Product"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/collection" element={<ShopGridPage />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
