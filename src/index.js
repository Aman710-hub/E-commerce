import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

// Domain
// dev-mb0d74nd.us.auth0.com

// client id
// NVBv61dIllsHHusW3OR7RMc7UooatL1A
ReactDOM.render(
  <Auth0Provider
    domain="dev-mb0d74nd.us.auth0.com"
    clientId="NVBv61dIllsHHusW3OR7RMc7UooatL1A"
    redirectUri={window.location.origin}
    casheLocation="localstorage"
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
