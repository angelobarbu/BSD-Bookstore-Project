import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader } from "@/components/ui/card.tsx";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="h-screen flex items-center justify-center">
                <Card className="w-full max-w-3xl p-8">
                    <CardHeader>
                        <h1 className="text-5xl font-bold text-center mb-6">About Us</h1>
                    </CardHeader>
                    <div className="text-xl leading-relaxed text-gray-700">
                        <p className="mb-4">
                            At Booksia, we offer a carefully curated collection for every reader, from timeless
                            classics to modern favorites.
                        </p>
                        <p>
                            More than a bookstore, we’re a community celebrating the magic of
                            reading. Start your next adventure with us—because every story
                            begins with once upon a time.
                        </p>
                    </div>
                </Card>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
