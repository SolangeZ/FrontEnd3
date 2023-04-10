import React, { useContext } from "react";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routesNavegation, Login } from "./Navegation/Routes";
import { ContextDarkMode } from "./Context/ContextDarkMode";
import LoginContextProvider from "./Context/LoginContext";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ContextFavsProvider from "./Context/ContextFavs";

const App = () => {
  const { isDarkMode } = useContext(ContextDarkMode);

  return (
    <LoginContextProvider>
      <ContextFavsProvider>
        <BrowserRouter>
          <div className={isDarkMode ? "dark" : "app"}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                {routesNavegation.map(({ id, path, Component }) => (
                  <Route
                    key={id}
                    path={path}
                    element={
                      <>
                        <Navbar />
                        <Component />
                        <Footer />
                      </>
                    }
                  />
                ))}
              </Route>
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ContextFavsProvider>
    </LoginContextProvider>
  );
};

export default App;
