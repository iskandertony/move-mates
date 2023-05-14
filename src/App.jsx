import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from "./pages/main";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    return (
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
    );
}

export default App;
