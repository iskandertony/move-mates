import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from "./pages/main";
import Login from "./components/Login";
import Register from "./components/Register"; // Добавить импорт Register
import { AuthProvider } from "./Auth/auth-context/script";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> {/* Добавить Route для Register */}
            </Routes>
        </AuthProvider>
    );
}

export default App;
