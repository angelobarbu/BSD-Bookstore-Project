import {Link} from "react-router-dom";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";

export default function NoPage() {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <h1 className="text-6xl sm:text-8xl lg:text-9xl">404</h1>
                <p className="text-lg sm:text-xl mt-4">This page got lost between our racks.</p>
                <Link to="/">
                    <p className="text-lg sm:text-xl mt-4">
                        Get back <span className="underline underline-offset-2">home</span>.
                    </p>
                </Link>
            </div>

            <Footer></Footer>
        </>

    )
};