import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/style.scss";
import ReduxProvider from "./store/provider/ReduxProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import products from "./data/products.json";
import { setProducts } from "./store/slices/product-slice.js";

store.dispatch(setProducts(products));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </Provider>
  </StrictMode>
);
