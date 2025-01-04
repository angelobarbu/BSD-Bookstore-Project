import './App.css'
import {Button} from "@/components/ui/button.tsx";
import Navbar from "@/components/navbar.jsx";
import SearchBar from "@/components/SearchBar.jsx";

function App() {
  return (
    <>
        <Navbar />
        <SearchBar></SearchBar>
        <Button>Click me</Button>

    </>
  )
}

export default App
