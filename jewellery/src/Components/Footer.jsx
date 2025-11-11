export default function Footer() {
    return (
        <footer className="bg-black text-white py-14 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* LOGO + TEXT */}
                <div>
                    <img
                        src="https://klbtheme.com/djewno/wp-content/uploads/2024/01/logo-2x-light.png"
                        alt="logo"
                        className="h-8 mb-4"
                    />
                    <p className="text-gray-300 text-sm leading-6">
                        Where elegance meets perfection. Discover jewelry designed to make you shine everyday.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white duration-200">Home</a></li>
                        <li><a href="#" className="hover:text-white duration-200">Products</a></li>
                        <li><a href="#" className="hover:text-white duration-200">About Us</a></li>
                        <li><a href="#" className="hover:text-white duration-200">Contact</a></li>
                    </ul>
                </div>

                {/* CUSTOMER SERVICE */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white duration-200">FAQs</a></li>
                        <li><a href="#" className="hover:text-white duration-200">Returns</a></li>
                        <li><a href="#" className="hover:text-white duration-200">Shipping Policy</a></li>
                        <li><a href="#" className="hover:text-white duration-200">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* CONTACT INFO */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <p className="text-gray-300 text-sm">📍 Surat, Gujarat, India</p>
                    <p className="text-gray-300 text-sm">📞 +91 987645xxxx</p>
                    <p className="text-gray-300 text-sm">✉ support@yourbrand.com</p>

                    {/* SOCIAL ICONS */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:scale-110 duration-200">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="h-6" />
                        </a>
                        <a href="#" className="hover:scale-110 duration-200">
                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="h-6" />
                        </a>
                        <a href="#" className="hover:scale-110 duration-200">
                            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" className="h-6" />
                        </a>
                    </div>
                </div>

            </div>

            {/* BOTTOM COPYRIGHT LINE */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
                © 2025 YourBrand. All rights reserved.
            </div>
        </footer>
    )
}
