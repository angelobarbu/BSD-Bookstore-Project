import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "@/pages/HomePage.jsx";
import NoPage from "@/pages/NoPage.jsx";
import WishlistPage from "@/pages/WishlistPage.jsx";
import Checkout from "@/pages/Checkout.jsx";
import AboutUs from "@/pages/AboutUs.jsx";
import Profile from "@/pages/Profile.jsx";
import ForgotPasswordEmail from "@/pages/ForgotPasswordEmail";
import ResetPassword from "@/pages/ResetPassword";
import ContactUs from "@/pages/ContactUs";
import ShippingAndReturns from "@/pages/ShippingAndReturns";
import Login from "@/pages/Login";


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
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordEmail />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/contact-us" element={<ContactUs />}/>
                    <Route path="/shipping-and-returns" element={<ShippingAndReturns />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App
