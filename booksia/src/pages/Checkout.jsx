import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import SearchBar from "@/components/SearchBar.jsx";
import Cart from "@/components/Cart.jsx";
import PaymentMethod from "@/components/PaymentMethod.jsx";
import CartSummary from "@/components/CartSummary.jsx";
import { Button } from "@/components/ui/button.tsx";
import DeliveryCard from "@/components/DeliveryCard.jsx";
import PaymentCard from "@/components/PaymentCard.jsx";

export default function Checkout() {
    const booksInCart = [
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
    ];

    const totalPrice = booksInCart.reduce((acc, book) => acc + parseFloat(book.price), 0);

    return (
        <>
            <Navbar />
            <SearchBar />
            <div className="flex flex-col md:flex-row gap-10 mx-8 mb-8">
                <Cart booksInCart={booksInCart} />
                <div className="flex flex-col md:w-2/3 space-y-6">
                    <div className="flex flex-row gap-2 ">
                        <DeliveryCard></DeliveryCard>
                        <PaymentCard></PaymentCard>
                    </div>
                    <PaymentMethod />
                    <CartSummary totalPrice={totalPrice} />
                    <Button className="mt-4">Proceed to Checkout</Button>
                </div>
            </div>
            <Footer />
        </>
    );
}
