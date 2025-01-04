import Navbar from "@/components/Navbar.jsx";
import SearchBar from "@/components/SearchBar.jsx";
import BookCard from "@/components/BookCard.tsx";
import Pages from "@/components/Pages.jsx";
import Footer from "@/components/Footer.jsx";
import Order from "@/components/Order.jsx";
import {Button} from "@/components/ui/button.tsx";
import {Wishlist} from "@/components/Wishlist.jsx";

export default function HomePage(){
    return (
        <>
            <Navbar/>
            <SearchBar></SearchBar>
            <Wishlist></Wishlist>
            <div className="flex gap-2 p-4">
                <Button variant="outline">Filter</Button>
                <Order></Order>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full p-4">
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </div>
            <Pages></Pages>
            <Footer></Footer>
        </>
    );
}