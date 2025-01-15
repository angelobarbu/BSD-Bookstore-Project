import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DeliveryCard({ address, city, postalCode, phoneNumber }) {
    const [deliveryDetails, setDeliveryDetails] = useState({
        address,
        city,
        postalCode,
        phoneNumber
    });

    const handleChange = (field, value) => {
        setDeliveryDetails((prevDetails) => ({
            ...prevDetails,
            [field]: value
        }));
    };

    return (
        <Card>
            <CardHeader className="flex flex-row gap-1">
                <Info />
                Delivery Details
            </CardHeader>
            <CardContent>
                <CardDescription>Address: {deliveryDetails.address}</CardDescription>
                <CardDescription>City: {deliveryDetails.city}</CardDescription>
                <CardDescription>Postal Code: {deliveryDetails.postalCode}</CardDescription>
                <CardDescription>Phone Number: {deliveryDetails.phoneNumber}</CardDescription>
            </CardContent>
            <CardFooter>
                <DeliveryDialog
                    deliveryDetails={deliveryDetails}
                    handleChange={handleChange}
                />
            </CardFooter>
        </Card>
    );
}

export function Info(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
        </svg>
    )
}

export function Edit(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
             className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
        </svg>

    )
}

export function DeliveryDialog({ deliveryDetails, handleChange }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" className="rounded-full"><Edit/></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Delivery Details</DialogTitle>
                    <DialogDescription>
                        Edit your delivery details below
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="address" className="text-right">
                            Address
                        </Label>
                        <Input
                            id="address"
                            value={deliveryDetails.address}
                            onChange={(e) => handleChange("address", e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="city" className="text-right">
                            City
                        </Label>
                        <Input
                            id="city"
                            value={deliveryDetails.city}
                            onChange={(e) => handleChange("city", e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="postalCode" className="text-right">
                            Postal Code
                        </Label>
                        <Input
                            id="postalCode"
                            value={deliveryDetails.postalCode}
                            onChange={(e) => handleChange("postalCode", e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phoneNumber" className="text-right">
                            Phone Number
                        </Label>
                        <Input
                            id="phoneNumber"
                            value={deliveryDetails.phoneNumber}
                            onChange={(e) => handleChange("phoneNumber", e.target.value)}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
