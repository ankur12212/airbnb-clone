import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import { AuthProvider } from "./Context/AuthContext.jsx";
import { UserProvider } from "./Context/UserContext.jsx";
import { ListingProvider } from "./Context/ListingContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ListingProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ListingProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);