

function Footer () {
    return (
        <footer className="flex text-white bg-black p-2 pb-10">
            <p className="text-3xl p-3 mr-5">booksia</p>
            <div className="py-2 mr-4">
                <p className="text-lg pb-1">About us</p>
                <p className="text-sm text-gray-400 pb-1">Forgot password</p>
                <p className="text-sm text-gray-400 pb-1">Shipping and returns</p>
                <p className="text-sm text-gray-400 pb-1">Home</p>
                <p className="text-sm text-gray-400 pb-1">My Profile</p>
            </div>
            <div className="py-2">
                <p className="text-lg pb-1">Legal Notice</p>
                <p className="text-sm text-gray-400 pb-1">Terms of use</p>
                <p className="text-sm text-gray-400 pb-1">Cookies</p>
                <p className="text-sm text-gray-400 pb-1">Privacy Policy</p>
            </div>

        </footer>
    )
}

export default Footer;