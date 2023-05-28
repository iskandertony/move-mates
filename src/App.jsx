import React from "react";

import { Route, Routes } from "react-router-dom";

import Footer from "./components/footer";

import { routing } from "./routing";
import useTokenHook from "./hooks/use-token-hook";
import axios from "axios";

function App() {
    // const { token } = useTokenHook();
    //
    // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return (
    <main className="app">
      <Routes>
        {Object.keys(routing).map((key) => {
          const rout = routing[key];
          if (rout.role === "all") {
            return <Route key={rout} path={rout.path} element={rout.element} />;
          }
          return null;
        })}
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
