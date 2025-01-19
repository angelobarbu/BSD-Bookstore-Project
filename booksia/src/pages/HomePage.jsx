import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar.jsx";
import SearchBar from "@/components/SearchBar.jsx";
import BookCategories from "@/components/BookCategories.jsx";
import BookCard from "@/components/BookCard.tsx";
import Pages from "@/components/Pages.jsx";
import Footer from "@/components/Footer.jsx";
import Order from "@/components/Order.jsx";
import { Button } from "@/components/ui/button.tsx";

export default function HomePage() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                // Retrieve the token from localStorage
                const token = localStorage.getItem("authToken");
                if (!token) {
                    throw new Error("No token found. Please login.");
                }

                // Make a request with the token in the Authorization header
                const response = await fetch("http://localhost:8080/books", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // Pass the token here
                    },
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch books: ${response.statusText}`);
                }

                const data = await response.json();
                setBooks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return <p>Loading books...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <Navbar />
            <SearchBar />
            <BookCategories />
            <div className="flex gap-2 p-4">
                <Button variant="outline">Filter</Button>
                <Order />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full p-4">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
            <Pages />
            <Footer />
        </>
    );
}