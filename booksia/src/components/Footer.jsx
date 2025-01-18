import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="flex flex-col sm:flex-row text-white bg-black p-4 pb-10">
            <p className="text-3xl p-3 sm:p-0 mr-5">booksia</p>
            <div className="py-2 mr-5">
                <Link to="/about-us"><p className="text-lg pb-1">About us</p></Link>
                <p className="text-sm text-gray-400 pb-1">Forgot password</p>
                <Link to="/shipping-returns"><p className="text-sm text-gray-400 pb-1">Shipping and returns</p></Link>
                <Link to="/"><p className="text-sm text-gray-400 pb-1">Home</p></Link>
                <Link to="/profile"><p className="text-sm text-gray-400 pb-1">My Profile</p></Link>
                <Link to="/contact-us"><p className="text-sm text-gray-400 pb-1">Contact Us</p></Link>
            </div>
            <div className="py-2">
            <p className="text-lg pb-1">Legal Notice</p>
                <p className="text-sm text-gray-400 pb-1">Terms of use</p>
                <p className="text-sm text-gray-400 pb-1">Cookies</p>
                <p className="text-sm text-gray-400 pb-1">Privacy Policy</p>
            </div>
        </footer>
    );
}


export default Footer;