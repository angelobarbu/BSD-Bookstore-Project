import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";

export default function DeliveryCard() {
    return (
        <Card>
            <CardHeader className="flex flex-row gap-1">
                <Info></Info>
                Delivery Details
            </CardHeader>
            <CardContent>
                <CardDescription>Delivery Address</CardDescription>
                <CardDescription>City</CardDescription>
                <CardDescription>Postal Code</CardDescription>
                <CardDescription>Phone Number</CardDescription>
            </CardContent>
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