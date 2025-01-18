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

    return (
        <>
            <Navbar />
            <SearchBar />
            <div className="flex flex-col md:flex-row gap-10 px-8 mb-8">
                <Cart />
                <div className="flex flex-col md:w-2/3 space-y-6">
                    <div className="flex flex-row gap-2 ">
                        <DeliveryCard
                            address="123 Main St"
                            city="New York"
                            postalCode="10001"
                            phoneNumber="123-456-7890"
                        />
                        <PaymentCard
                            cardName="Visa"
                            cardNumber="1234 5678 9876 5432"
                            expirationDate="12/24"
                        />
                    </div>
                    <PaymentMethod />
                    <CartSummary totalPrice={40} />
                    <Button className="mt-4">Proceed to Checkout</Button>
                </div>
            </div>
            <Footer />
        </>
    );
}
