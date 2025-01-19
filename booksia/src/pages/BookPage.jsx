import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar.jsx";
import SearchBar from "@/components/SearchBar.jsx";
import Footer from "@/components/Footer.jsx";
import { Button } from "@/components/ui/button.tsx";
import RatingCard from "@/components/RatingCard.jsx";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel.tsx";

export default function BookPage() {
    const { id } = useParams(); // Get the book ID from the URL
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch the book data when the component mounts
    useEffect(() => {
        const fetchBook = async () => {
            try {
                // Retrieve token from localStorage
                const token = localStorage.getItem("authToken");
                if (!token) {
                    throw new Error("Token is missing. Please log in.");
                }

                // Send request with the token in the Authorization header
                const response = await fetch(`http://localhost:8080/books/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch book data");
                }

                const data = await response.json();
                setBook(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    // Handle loading and error states
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    // Render the book page once the data is loaded
    return (
        <>
            <Navbar />
            <div className="h-screen">
                <SearchBar />
                <div className="flex flex-col lg:flex-row items-center lg:items-start px-16 sm:px-20 md:px-32 md:space-x-4 pb-4">
                    <img
                        src={book.coverImageURL} // Updated attribute name
                        alt="Book Cover"
                        className="max-w-full md:max-w-[80%] max-h-96 w-auto rounded-lg shadow-accent"
                    />
                    <div className="mt-4 md:mt-0 md:pl-10 flex flex-col justify-between h-full">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
                            <div className="text-lg text-gray-600 mb-4">
                                by {book.authors && book.authors.length > 0 ? book.authors.join(", ") : "Unknown Author"}
                            </div>
                            <div className="text-gray-700">
                                {book.description}
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <div className="text-lg font-semibold">{book.price} LEI</div>
                            <Button>Add to cart</Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start px-10 sm:px-20 md:px-32 md:gap-10 md:space-x-4 py-4">
                    <div className="mt-4 text-sm text-gray-700">
                        <p className="text-xl mb-2">Book Details</p>
                        <p>Format: {book.format || "N/A"}</p>
                        <p>Language: {book.language || "N/A"}</p>
                        <p>ISBN: {book.isbn || "N/A"}</p>
                        <p>Publisher: {book.publisher?.name || "N/A"}</p>
                        <p>Year Published: {book.yearPublished || "N/A"}</p>
                        <p>Pages: {book.numberOfPages || "N/A"}</p>
                    </div>

                    {/* Conditionally render the carousel if there are reviews */}
                    {book.reviews && book.reviews.length > 0 && (
                        <Carousel className="w-2/3 md:w-full mt-4 md:px-4">
                            <CarouselContent>
                                {book.reviews.map((review, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3">
                                        <RatingCard review={review} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="px-2" />
                            <CarouselNext className="px-2" />
                        </Carousel>
                    )}
                </div>
                <Footer />
            </div>
        </>
    );
}