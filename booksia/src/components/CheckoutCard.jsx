import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";

export default function CheckoutCard({ book }) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center space-x-4">
                    <img
                        src={book.coverUrl}
                        alt={`Cover of ${book.title}`}
                        className="w-24 h-32 object-cover rounded"
                    ></img>
                    <div className="flex flex-col justify-between">
                        <CardTitle className="text-xl font-semibold">{book.title}</CardTitle>
                        <CardDescription className="text-gray-600">{book.author}</CardDescription>
                        <p className="text-lg font-semibold">{book.price} LEI</p>
                    </div>
                </div>
            </CardHeader>
        </Card>
    );
}
