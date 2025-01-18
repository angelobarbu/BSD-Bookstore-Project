import React, { useState } from "react";
import Layout from "@/components/ui/layout.tsx";
import RatingCard from "@/components/RatingCard.jsx";

const reviews = [
    { title: "Great Product!", rating: 5, content: "I loved this product. It exceeded my expectations." },
    { title: "Not Bad", rating: 3, content: "It’s okay, but there are some improvements that could be made." },
    { title: "Terrible Experience", rating: 1, content: "The product broke after one use, very disappointing." },
    { title: "Great Product!", rating: 5, content: "I loved this product. It exceeded my expectations." },
    { title: "Not Bad", rating: 3, content: "It’s okay, but there are some improvements that could be made." },
    { title: "Terrible Experience", rating: 1, content: "The product broke after one use, very disappointing." },
];

export default function ReviewsPage() {
    return (
        <Layout>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                {reviews.map((review, index) => (
                    <RatingCard review={review} />
                ))}
            </div>
        </Layout>
    );
}


