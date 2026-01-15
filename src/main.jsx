import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="374784511682-6dr1l9kvskv5csr07k3i9cvmpp9f57n7.apps.googleusercontent.com">
      <BrowserRouter>
        <App />

        {/* 🔥 Global Toast */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#141414",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }}
        />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);
