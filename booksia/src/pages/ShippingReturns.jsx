import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader } from "@/components/ui/card.tsx";

const ShippingReturns = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center px-4">
                <Card className="w-full max-w-3xl p-6 md:p-8">
                    <CardHeader>
                        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">Shipping & Returns</h1>
                    </CardHeader>
                    <div className="text-base md:text-xl leading-relaxed text-gray-700">
                        <ul className="list-disc pl-5 mb-6">
                            <li>
                                <strong>Delivery Times:</strong> Orders are typically processed within 2 business days
                                and shipped via Sameday. Delivery times vary based on your location, with most orders
                                arriving within 3-5 days.
                            </li>
                            <li>
                                <strong>Shipping Rates:</strong> 15-20 RON, with FREE shipping for orders over 200 LEI.
                            </li>
                            <li>
                                <strong>Tracking:</strong> You’ll receive a tracking number once your order ships,
                                allowing you to follow its journey.
                            </li>
                        </ul>
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold mb-4">Return Policy</h2>
                            <p className="mb-4">
                                Returns are accepted within 30 days of delivery for a full refund or exchange, as long
                                as the items are in their original condition.
                            </p>
                            <p className="mb-4">
                                <strong>How to Return:</strong> Contact us at <a href="mailto:booksia@example.com"
                                                                                 className="text-blue-600 underline">booksia@example.com</a> to
                                initiate a return. We’ll provide detailed instructions and a return label if applicable.
                            </p>
                            <p>
                                <strong>Refunds:</strong> Once we receive your returned items, your refund will be
                                processed within 7 business days.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
            <Footer />
        </>
    );
};

export default ShippingReturns;
