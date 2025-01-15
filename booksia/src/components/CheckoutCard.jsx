import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx";

export default function CheckoutCard({ book, onDelete }) {
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
            <CardFooter className="flex justify-end">
                <Del onClick={onDelete} />
            </CardFooter>
        </Card>
    );
}

function Del({ onClick }) {
    return (
        <svg
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 cursor-pointer"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
            />
        </svg>
    );
}
