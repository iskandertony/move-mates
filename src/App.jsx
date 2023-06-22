import React from "react";
import { Route, Routes } from "react-router-dom";
import { routing } from "./routing";

import Footer from "./components/footer";
function App() {

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
