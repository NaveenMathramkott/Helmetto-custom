import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoute from "./axios/UserRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const AuthPage = lazy(() => import("./pages/LoginRegister"));
const ShopGridPage = lazy(() => import("./pages/ShopGridPage"));
const CheckOutPage = lazy(() => import("./pages/CheckOutPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const HelmetCustomization = lazy(() =>
  import("./components/configurator/HelmetCustomization")
);
const Product = lazy(() => import("./components/product/Product"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flone-preloader-wrapper">
            <div className="flone-preloader">
              <span></span>
              <span></span>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/collection" element={<ShopGridPage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/configurator" element={<HelmetCustomization />} />
          <Route path="/dashboard" element={<UserRoute />}>
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
