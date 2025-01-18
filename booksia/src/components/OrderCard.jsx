import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from "@/components/ui/dialog.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Edit } from "@/components/DeliveryCard.jsx";

export default function OrderCard({ order }) {
    const { orderId, product, date, status, total } = order;

    const [isOpen, setIsOpen] = useState(false);

    const handleDialogOpen = () => setIsOpen(true);

    const handleCancelOrder = () => {
        console.log(`Order ${orderId} has been canceled.`);
        setIsOpen(false);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{product}</CardTitle>
                <CardDescription>
                    <p>Order ID: {orderId}</p>
                    <p>Date: {date}</p>
                    <p>Status: {status}</p>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="font-bold text-xl">Total: {total}</p>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button variant="ghost" className="rounded-full" onClick={handleDialogOpen}>
                            <Edit />
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Order Details</DialogTitle>
                            <DialogDescription>
                                View detailed information about this order.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <p className="col-span-1">Order ID:</p>
                                <p className="col-span-3">{orderId}</p>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <p className="col-span-1">Product:</p>
                                <p className="col-span-3">{product}</p>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <p className="col-span-1">Date:</p>
                                <p className="col-span-3">{date}</p>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <p className="col-span-1">Status:</p>
                                <p className="col-span-3">{status}</p>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <p className="col-span-1">Total:</p>
                                <p className="col-span-3">{total}</p>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="destructive" onClick={handleCancelOrder}>
                                Cancel Order
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
}
