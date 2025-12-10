import React from 'react';
import { Phone } from 'lucide-react';

const StickyCTA = ({ number = "0123 456 7890", label = "Call Now" }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-50">
            <a
                href={`tel:${number.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-3 w-full bg-accent text-white font-bold py-3.5 px-6 rounded-full shadow-lg active:scale-[0.98] transition-all"
            >
                <Phone size={20} className="fill-current" />
                <span className="text-lg">{label} - {number}</span>
            </a>
        </div>
    );
};

export default StickyCTA;
