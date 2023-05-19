import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Home from "./pages/Home";

function App() {
    return (
        <main className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/main" element={<Main />} />
            </Routes>
            <Footer/>
        </main>
    );
}

export default App;
