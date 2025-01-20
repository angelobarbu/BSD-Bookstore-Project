import React from "react";
import Layout from "@/components/ui/layout.tsx";
import OrderCard from "@/components/OrderCard.jsx";

const orders = [
    { orderId: "12345", product: "The Great Gatsby", date: "2025-01-10", status: "Shipped", total: "150 LEI" },
    { orderId: "12346", product: "1984", date: "2025-01-12", status: "Processing", total: "50 LEI" },
    { orderId: "12347", product: "To Kill a Mockingbird", date: "2025-01-14", status: "Delivered", total: "1000 LEI" },
    { orderId: "12348", product: "Brave New World", date: "2025-01-15", status: "Shipped", total: "600 LEI" },
    { orderId: "12349", product: "Moby Dick", date: "2025-01-17", status: "Processing", total: "200 LEI" },
    { orderId: "12350", product: "Pride and Prejudice", date: "2025-01-18", status: "Delivered", total: "400 LEI" },
];


export default function OrdersPage() {
    return (
        <Layout>
            <h1 className="text-2xl font-bold text-center py-4">Your Orders</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                {orders.map((order) => (
                    <OrderCard order={order} />
                ))}
            </div>
        </Layout>
    );
}
