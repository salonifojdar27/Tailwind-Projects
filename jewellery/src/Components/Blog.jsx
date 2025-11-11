import React from "react";

const blogs = [
    {
        id: 1,
        title: "How to Style Jewelry with Every Outfit",
        description:
            "Learn how to match jewelry with daily wear and occasions while keeping it classy and balanced.",
        date: "November 10, 2025",
        image:
            "https://t3.ftcdn.net/jpg/02/56/67/18/360_F_256671837_fpHohurGNgwNW1jqj0hIZ8Lp54OWLkNr.jpg",
    },
    {
        id: 2,
        title: "Top 5 Gold Trends in 2025",
        description:
            "Gold jewelry is never out of style but 2025 is seeing a fresh twist. Let’s discover what’s trending.",
        date: "October 28, 2025",
        image:
            "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg",
    },
    {
        id: 3,
        title: "Silver or Gold? How to Choose What Suits You",
        description:
            "Confused between silver and gold accessories? Here’s how to choose based on skin tone and style.",
        date: "September 15, 2025",
        image:
            "https://blogapi.perrian.com/wp-content/uploads/2022/03/5-Must-Have-Diamond-Jewellery-Pieces-You-Cant-Ignore.jpg",
    },
];

export default function Blog() {
    return (
        <div className="bg-white py-20 px-6 md:px-12 max-w-7xl mx-auto">

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((post) => (
                    <div key={post.id} className="shadow-lg rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="h-56 w-full object-cover"
                        />

                        <div className="p-5">
                            <p className="text-sm text-gray-500">{post.date}</p>
                            <h2 className="text-xl font-semibold text-gray-800 mt-2">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                {post.description}
                            </p>

                            <button className="mt-4 inline-block text-sm font-semibold text-pink-600 underline hover:text-pink-800">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
