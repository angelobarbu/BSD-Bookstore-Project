import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import {RegistrationForm} from "@/components/ui/registration-form.tsx";


export default function Page() {
    return (
        <>
            <Navbar/>
            <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <RegistrationForm/>
                </div>
            </div>
            <Footer></Footer>
        </>

    )
}

