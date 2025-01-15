import CheckoutCard from "@/components/CheckoutCard.jsx";
import {useState} from "react";


export default function Cart() {
    const [booksInCart, setBooksInCart] = useState([
        {
            id: 1,
            coverUrl: "src/assets/ex.jpg",
            title: "Book Title 1",
            author: "Author Name 1",
            price: "35.5",
            description: "This is a short description of the book 1."
        },
        {
            id: 2,
            coverUrl: "src/assets/ex.jpg",
            title: "Book Title 2",
            author: "Author Name 2",
            price: "45.0",
            description: "This is a short description of the book 2."
        }
    ]);
    const removeBook = (id) => {
        setBooksInCart(booksInCart.filter((book) => book.id !== id));
    };
    return (
        <div className="flex flex-col md:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold mb-2">Shopping Cart</h2>
            {booksInCart.map((book) => (
                <CheckoutCard key={book.id} book={book} onDelete={() => removeBook(book.id)} />
            ))}
        </div>
    );
}
