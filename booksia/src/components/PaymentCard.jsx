import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card.tsx";
import {Info} from "@/components/DeliveryCard.jsx";

export default function PaymentCard() {
    return (
        <Card>
            <CardHeader className="flex flex-row gap-1">
                <Info></Info>
                Payment Details
            </CardHeader>
            <CardContent>
                <CardDescription>Card Name</CardDescription>
                <CardDescription>Card Number</CardDescription>
                <CardDescription>Expiration Date</CardDescription>
            </CardContent>
        </Card>
    );
}