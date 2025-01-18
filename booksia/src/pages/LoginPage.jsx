import { LoginForm } from "@/components/ui/login-form.tsx";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";

export default function Page() {
    return (
        <>
            <Navbar/>
            <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <LoginForm/>
                </div>
            </div>
            <Footer></Footer>
        </>

    )
}

