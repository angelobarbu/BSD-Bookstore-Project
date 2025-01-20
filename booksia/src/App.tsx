import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage.jsx";
import NoPage from "@/pages/NoPage.jsx";
import WishlistPage from "@/pages/WishlistPage.jsx";
import Checkout from "@/pages/Checkout.jsx";
import Profile from "@/pages/Profile.tsx";
import BookPage from "@/pages/BookPage.jsx";
import AboutUs from "@/pages/AboutUs.jsx";
import ShippingReturns from "@/pages/ShippingReturns.jsx";
import ContactUs from "@/pages/ContactUs.jsx";
import LoginPage from "@/pages/LoginPage.jsx";
import RegisterPage from "@/pages/RegisterPage.jsx";
import ReviewsPage from "@/pages/ReviewsPage.tsx";
import OrdersPage from "@/pages/OrdersPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile" element={<Profile />} />
                
                {/* Dynamic route for book details */}
                <Route path="/book/:id" element={<BookPage />} />
                
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/shipping-returns" element={<ShippingReturns />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;