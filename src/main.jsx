import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SWRConfig } from "swr";
import { AuthProvider } from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <SWRConfig
      value={{
        refreshInterval: 300000,
      }}
    >
      <App />
    </SWRConfig>
  </AuthProvider>
);
