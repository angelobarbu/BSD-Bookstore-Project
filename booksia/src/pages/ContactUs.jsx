import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader } from "@/components/ui/card.tsx";

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center px-4">
                <Card className="w-full max-w-3xl p-6 md:p-8">
                    <CardHeader>
                        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
                            Contact Us
                        </h1>
                    </CardHeader>
                    <div className="text-base md:text-xl leading-relaxed text-gray-700">
                        <p className="mb-6 text-center">
                            We’d love to hear from you! Whether you have questions, need recommendations, or just want
                            to share your favorite story, we’re here to help.
                        </p>
                        <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left">
                            <div className="mb-6 md:mb-0">
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800">Email</h2>
                                <p>
                                    <a href="mailto:booksia@example.com">
                                        booksia@example.com
                                    </a>
                                </p>
                            </div>
                            <div className="mb-6 md:mb-0">
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800">Phone</h2>
                                <p>
                                    <a href="tel:0712345678">
                                        0712345678
                                    </a>
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800">Address</h2>
                                <p>Bucharest, Romania</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
