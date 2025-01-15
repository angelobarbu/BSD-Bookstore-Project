import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit } from "@/components/DeliveryCard.jsx";

export default function PaymentCard({ cardName, cardNumber, expirationDate }) {
    const [paymentDetails, setPaymentDetails] = useState({
        cardName,
        cardNumber,
        expirationDate,
    });

    const handleChange = (field, value) => {
        setPaymentDetails((prevDetails) => ({
            ...prevDetails,
            [field]: value,
        }));
    };

    return (
        <Card>
            <CardHeader className="flex flex-row gap-1">
                <CardIcon />
                Payment Details
            </CardHeader>
            <CardContent>
                <CardDescription>Your information is secure</CardDescription>
                <CardDescription>Card Name: {paymentDetails.cardName}</CardDescription>
                <CardDescription>Card Number: {paymentDetails.cardNumber}</CardDescription>
                <CardDescription>Expiration Date: {paymentDetails.expirationDate}</CardDescription>
            </CardContent>
            <CardFooter>
                <PaymentDialog paymentDetails={paymentDetails} handleChange={handleChange} />
            </CardFooter>
        </Card>
    );
}

function CardIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
        </svg>
    );
}

function PaymentDialog({ paymentDetails, handleChange }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" className="rounded-full">
                    <Edit />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Payment Details</DialogTitle>
                    <DialogDescription>Modify your payment information below</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="cardName" className="text-right">
                            Card Name
                        </Label>
                        <Input
                            id="cardName"
                            value={paymentDetails.cardName}
                            onChange={(e) => handleChange("cardName", e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="cardNumber" className="text-right">
                            Card Number
                        </Label>
                        <Input
                            id="cardNumber"
                            value={paymentDetails.cardNumber}
                            onChange={(e) => handleChange("cardNumber", e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="expirationDate" className="text-right">
                            Expiration Date
                        </Label>
                        <Input
                            id="expirationDate"
                            value={paymentDetails.expirationDate}
                            onChange={(e) => handleChange("expirationDate", e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
