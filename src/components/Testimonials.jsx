import React from 'react';
import { Star } from 'lucide-react';

const defaultReviews = [
    {
        text: "Fixed the burst pipe preventing major water damage. Clean, professional, and transparent pricing. Saved our wood floors!",
        author: "Sarah J.",
        location: "Kensington",
        rating: 5,
        role: "Emergency Repair"
    },
    {
        text: "It's like having a hotel suite at home. The tiling is perfect, and the team suggested a layout I hadn't even thought of.",
        author: "James S.",
        location: "Chelsea",
        rating: 5,
        role: "Bathroom Renovation"
    },
    {
        text: "Arrived within 45 minutes as promised. The engineer wore shoe covers and was incredibly polite. Highly recommend.",
        author: "Michael T.",
        location: "Richmond",
        rating: 5,
        role: "Leak Repair"
    }
];

const Testimonials = ({ reviews = defaultReviews }) => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-accent">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Real Reviews from Your Neighbors
                    </p>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {reviews.map((review, index) => (
                        <div key={index} className="flex flex-col justify-between bg-white p-8 shadow-sm ring-1 ring-gray-900/5 sm:rounded-2xl sm:p-10 hover:shadow-md transition-shadow">
                            <div className="flex gap-1 mb-4 text-accent">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <blockquote className="text-gray-900 text-lg leading-8 grow">
                                <p>“{review.text}”</p>
                            </blockquote>
                            <div className="mt-8 flex items-center gap-x-4">
                                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                                    {review.author.charAt(0)}
                                </div>
                                <div className="text-sm leading-6">
                                    <div className="font-semibold text-gray-900">{review.author}</div>
                                    <div className="text-gray-600">{review.role || review.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
