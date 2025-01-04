import Navbar from "@/components/Navbar.jsx";
import SearchBar from "@/components/SearchBar.jsx";
import BookCategories from "@/components/BookCategories.jsx";
import BookCard from "@/components/BookCard.tsx";
import Pages from "@/components/Pages.jsx";
import Footer from "@/components/Footer.jsx";

export default function HomePage(){
    return (
        <>
            <Navbar/>
            <SearchBar></SearchBar>
            <BookCategories></BookCategories>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full p-4">
                <BookCard/>
                <BookCard/>
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