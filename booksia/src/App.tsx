import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "@/pages/HomePage.jsx";
import NoPage from "@/pages/NoPage.jsx";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App
