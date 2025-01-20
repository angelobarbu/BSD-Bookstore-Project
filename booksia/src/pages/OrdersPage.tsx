import React, { useEffect, useState } from "react";
import Layout from "@/components/ui/layout.tsx";
import OrderCard from "@/components/OrderCard.jsx";

export default function OrdersPage() {
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (!token) {
                    setError("No authentication token found");
                    return;
                }

                const response = await fetch("http://localhost:8080/orders", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch orders");
                }

                const data = await response.json();
                setOrders(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <p>Loading orders...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <Layout>
            <h1 className="text-2xl font-bold text-center py-4">Your Orders</h1>
            {orders.length === 0 ? (
                <div className="text-center text-gray-600">
                    <p>No orders found. Please check back later or make a new purchase.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                    {orders.map((order) => (
                        <OrderCard key={order.orderId} order={order} />
                    ))}
                </div>
            )}
        </Layout>
    );
}
