import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "./components/login";
import Register from "./components/register";
import Footer from "./components/footer";
import Main from "./pages/main";
import Home from "./pages/home";
import Payment from "./pages/payment";

function App() {
    return (
        <main className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/main" element={<Main />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
            <Footer/>
        </main>
    );
}

export default App;
