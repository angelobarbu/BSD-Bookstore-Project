import Navbar from "@/components/Navbar.jsx";
import SearchBar from "@/components/SearchBar.jsx";
import BookCard from "@/components/BookCard.tsx";
import Pages from "@/components/Pages.jsx";
import Footer from "@/components/Footer.jsx";
import Order from "@/components/Order.jsx";
import {Button} from "@/components/ui/button.tsx";
import {Wishlist} from "@/components/Wishlist.jsx";

const books = [
    {
        id: 1,
        coverUrl: "src/assets/ex.jpg",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: "40.0",
    },
    {
        id: 2,
        coverUrl: "src/assets/ex.jpg",
        title: "1984",
        author: "George Orwell",
        price: "32.5",
    },
    {
        id: 3,
        coverUrl: "src/assets/ex.jpg",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: "25.0",
    },
    {
        id: 4,
        coverUrl: "src/assets/ex.jpg",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: "29.99",
    },
    {
        id: 5,
        coverUrl: "src/assets/ex.jpg",
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: "38.5",
    },
    {
        id: 6,
        coverUrl: "src/assets/ex.jpg",
        title: "Moby Dick",
        author: "Herman Melville",
        price: "42.0",
    },
    {
        id: 7,
        coverUrl: "src/assets/ex.jpg",
        title: "The Odyssey",
        author: "Homer",
        price: "19.0",
    },
    {
        id: 8,
        coverUrl: "src/assets/ex.jpg",
        title: "Brave New World",
        author: "Aldous Huxley",
        price: "28.0",
    },
    {
        id: 9,
        coverUrl: "src/assets/ex.jpg",
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        price: "33.0",
    },
    {
        id: 10,
        coverUrl: "src/assets/ex.jpg",
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        price: "36.0",
    },
];

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
                {books.map((book) => (
                    <BookCard key={book.id} book={book}/>
                ))}
            </div>
            <Pages></Pages>
            <Footer></Footer>
        </>
    );
}