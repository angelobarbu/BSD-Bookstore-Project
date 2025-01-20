import Navbar from "@/components/Navbar.jsx";
import SearchBar from "@/components/SearchBar.jsx";
import BookCard from "@/components/BookCard.tsx";
import Pages from "@/components/Pages.jsx";
import Footer from "@/components/Footer.jsx";
import Order from "@/components/Order.jsx";
import { Button } from "@/components/ui/button.tsx";
import { Wishlist } from "@/components/Wishlist.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WishlistPage() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (!token) {
                    throw new Error("No token found. Please login.");
                }

                const response = await fetch("http://localhost:8080/wishlist", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch books: ${response.statusText}`);
                }

                const data = await response.json();
                console.log(data);
                setBooks(data);
            } catch (err) {
                setError(err.message);
                // navigate("/login");
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return <p>Loading wishlist books...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <Navbar />
            <SearchBar />
            <Wishlist />
            <div className="flex gap-2 p-4">
                <Button variant="outline">Filter</Button>
                <Order />
            </div>

            {books.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full p-4">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            ) : (
                <div className="h-screen text-center w-full col-span-6">
                    <p className="text-gray-500 text-lg">
                        Your wishlist is empty. Start adding books to your wishlist to see them here!
                    </p>
                </div>
            )}
            <Pages />
            <Footer />
        </>
    );
}
