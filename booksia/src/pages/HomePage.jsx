import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar.jsx";
import SearchBar from "@/components/SearchBar.jsx";
import BookCategories from "@/components/BookCategories.jsx";
import BookCard from "@/components/BookCard.tsx";
import Pages from "@/components/Pages.jsx";
import Footer from "@/components/Footer.jsx";
import Order from "@/components/Order.jsx";
import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (!token) {
                    throw new Error("No token found. Please login.");
                }

                const response = await fetch("http://localhost:8080/books", {
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
                setBooks(data);
            } catch (err) {
                setError(err.message);
                navigate("/login");
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term);

        // Automatically switch to "All" category if a search term is provided
        if (term.trim() && selectedCategory !== "All") {
            setSelectedCategory("All");
        }
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        if (searchTerm) {
            setSearchTerm("");
        }
    };

    const filteredBooks = books.filter(book => {
        const matchesCategory = selectedCategory === "All" || book.collection === selectedCategory;
        const matchesSearch = searchTerm ? book.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
        return matchesCategory && matchesSearch;
    });

    if (loading) {
        return <p>Loading books...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <Navbar />
            <SearchBar onSearch={handleSearch} />
            <BookCategories onCategorySelect={handleCategorySelect} />
            <div className="flex gap-2 p-4">
                <Button variant="outline">Filter</Button>
                <Order />
            </div>
            {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full p-4">
                    {filteredBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            ) : (
                <div className="h-screen text-center w-full col-span-6">
                    <p className="text-gray-500 text-lg">
                        No books found matching your search or selected category.
                    </p>
                </div>
            )}
            <Footer />
        </>
    );
}
