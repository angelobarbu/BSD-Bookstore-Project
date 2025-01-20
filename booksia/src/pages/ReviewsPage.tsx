import React, { useEffect, useState } from "react";
import Layout from "@/components/ui/layout.tsx";
import RatingCard from "@/components/RatingCard.jsx";

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const bookID = 1; // Set the book ID you want to fetch reviews for
                const token = localStorage.getItem("authToken");

                if (!token) {
                    setError("No authentication token found");
                    return;
                }

                const response = await fetch(`http://localhost:8080/reviews/book/${bookID}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch reviews");
                }

                const data = await response.json();
                setReviews(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    if (loading) {
        return <p>Loading reviews...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <Layout>
            <h1 className="text-2xl font-bold text-center py-4">Your Reviews</h1>
            {reviews.length === 0 ? (
                <div className="text-center text-gray-600">
                    <p>No reviews found for this book. Be the first to leave a review!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                    {reviews.map((review) => (
                        <RatingCard key={review.id} review={review} />
                    ))}
                </div>
            )}
        </Layout>
    );
}
