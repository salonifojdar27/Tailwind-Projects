import React from "react";

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT TEXT */}
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    We’re changing the way people connect
                </h1>

                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                    Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit.
                    Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor.
                </p>

                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    Sunt aliqua anim nulla sunt mollit id pariatur in voluptate cillum.
                    Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua.
                </p>
            </div>

            {/* RIGHT IMAGES */}
            <div className="flex gap-6 justify-center md:justify-end">

                {/* Column 1 */}
                <div className="flex flex-col gap-6">
                    <img
                        src="https://klbtheme.com/djewno/wp-content/uploads/2024/02/1-43.jpg"
                        className="w-36 md:w-48 h-48 md:h-56 rounded-xl object-cover shadow-md"
                        alt=""
                    />

                    <img
                        src="https://klbtheme.com/djewno/wp-content/uploads/2024/02/1-36.jpg"
                        className="w-36 md:w-48 h-48 md:h-56 rounded-xl object-cover shadow-md"
                        alt=""
                    />
                </div>

                {/* Column 2 (staggered) */}
                <div className="flex flex-col gap-6 mt-10">
                    <img
                        src="https://klbtheme.com/djewno/wp-content/uploads/2024/02/1-59.jpg"
                        className="w-36 md:w-48 h-48 md:h-56 rounded-xl object-cover shadow-md"
                        alt=""
                    />
                </div>

            </div>

        </div>
    );
};

export default About;
