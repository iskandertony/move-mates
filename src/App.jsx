import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { routing } from "./routing";

import Footer from "./components/footer";
import authStore from "./store/auth";
import { observer } from "mobx-react";

function App() {
  const location = useLocation();

  const FooterRoutes = [
    "/main",
    "/client",
    "/calendar",
    "/chat",
    "coach",
    "client",
  ];

  const showFooter = FooterRoutes.includes(location.pathname);

  return (
    <main className="app">
      <Routes>
        {Object.keys(routing).map((key) => {
          const route = routing[key];
          if (route.role === "all") {
            return (
              <Route key={key} path={route.path} element={route.element} />
            );
          }
          return null;
        })}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
      {showFooter && <Footer />}
    </main>
  );
}

export default observer(App);
