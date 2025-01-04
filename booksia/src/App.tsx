import './App.css';
import Navbar from "@/components/navbar.jsx";
import SearchBar from "@/components/SearchBar.jsx";
import BookCard from "@/components/BookCard.tsx";
import Pages from "@/components/Pages.jsx";

function App() {
  return (
    <>
        <Navbar />
        <SearchBar></SearchBar>
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
    </>
  )
}

export default App
