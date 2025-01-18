import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/book" element={<BookPage
                        book={{
                            title: "Book Title",
                            author: "Author Name",
                            coverUrl: "src/assets/ex.jpg",
                            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
                            price: "35.5 LEI",
                            details: {
                                deliveryTime: "3-5 business days",
                                categories: "Young adult",
                                recommendedAge: "14-16 years",
                                language: "English",
                                publicationDate: "2023",
                                publisher: "Bloomsbury",
                                coverType: "Paperback",
                                pageCount: 352,
                                isbn: "9781526648549",
                                dimensions: "l: 13cm | H: 20cm | 315g"
                            },
                            reviews: [
                                { title: "Wonderful!!!!!", rating: 4, content: "Great book!" },
                                { title: "Recommend!!", rating: 5, content: "Loved it!" },
                                { title: "Average storyline", rating: 3, content: "It was okay." }
                            ]
                        }}
                    />
                    } />
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
        </>
    );
}

export default App
