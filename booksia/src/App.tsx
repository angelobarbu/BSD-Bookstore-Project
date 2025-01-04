import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "@/pages/HomePage.jsx";
import NoPage from "@/pages/NoPage.jsx";
import WishlistPage from "@/pages/WishlistPage.jsx";
import Checkout from "@/pages/Checkout.jsx";
import Profile from "@/pages/Profile.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App
