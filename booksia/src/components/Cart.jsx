import CheckoutCard from "@/components/CheckoutCard.jsx";

export default function Cart({ booksInCart}) {
    return (
        <div className="flex flex-col md:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold mb-2">Shopping Cart</h2>
            {booksInCart.map((book) => (
                <CheckoutCard key={book.id} book={book} />
            ))}
        </div>
    );
}
