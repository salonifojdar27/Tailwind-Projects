import React from "react";

const Contact = () => {
    return (
        <div className="bg-[#f7f3eb] py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* LEFT TEXT */}
                <div>
                    <p className="text-xs tracking-wider text-gray-500">
                        DU KAN VARA DRABADAB
                    </p>

                    <h2 className="text-3xl font-bold mt-2 text-gray-900">
                        Our Showroom
                    </h2>

                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Mara. Ambistat proskade tempoifiering, reamatisk megaosmos. Memil
                        galna chips-sjukan till IVPA. Näringslots fronta varat i
                        kameratelefon liksom giganing.
                    </p>

                    <p className="mt-6 font-semibold text-gray-900">
                        Opening Hours: <span className="font-normal">10am - 5pm</span>
                    </p>
                    <p className="text-gray-700">Thursday - Saturday</p>

                    <button className="mt-8 text-sm font-semibold border-b-2 border-black pb-1 hover:opacity-70 transition">
                        BOOK A VISIT
                    </button>
                </div>

                {/* RIGHT IMAGE */}
                <div>
                    <img
                        src="https://klbtheme.com/djewno/wp-content/uploads/2024/02/banner-17.jpg"
                        alt="Jewelry showroom"
                        className="rounded-lg w-full object-cover shadow-md"
                    />
                </div>

            </div>
        </div>
    );
};

export default Contact;
