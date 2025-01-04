import './App.css'
import {Button} from "@/components/ui/button.tsx";
import Navbar from "@/components/navbar.jsx";
import SearchInput from "@/components/SearchInput.jsx";

function App() {
  return (
    <>
        <Navbar />
        <Button>Hello</Button>
        <SearchInput></SearchInput>
    </>
  )
}

export default App
