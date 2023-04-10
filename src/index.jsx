import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextDarkModeProvider from "./Context/ContextDarkMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(
   <React.StrictMode>
      <ContextDarkModeProvider>
         <App />
      </ContextDarkModeProvider>
   </React.StrictMode>
);
