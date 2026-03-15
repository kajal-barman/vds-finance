import React, { useState, useEffect } from 'react';

const partners = [
  {
    id: 1,
    name: "Bajaj Finserv",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bajaj_Finserv_Logo.svg/1280px-Bajaj_Finserv_Logo.svg.png",
    caption: "India’s leading NBFC providing personal loans, business loans, and EMI financing solutions.",
    description: "Personal and business loan provider"
  },
  {
    id: 2,
    name: "HDFC Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
    caption: "One of India's largest private sector banks offering a wide range of financial services.",
    description: "Banking and loan services"
  },
  {
    id: 3,
    name: "ICICI Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg",
    caption: "Major Indian bank providing retail loans, credit cards, and financial services.",
    description: "Retail banking and finance"
  },
  {
    id: 4,
    name: "Axis Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg",
    caption: "Private sector bank offering personal, home, and business loans.",
    description: "Private banking services"
  },
  {
    id: 5,
    name: "Kotak Mahindra Bank",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Kotak_Mahindra_Group_logo.svg/1280px-Kotak_Mahindra_Group_logo.svg.png",
    caption: "Financial services company offering loans, investment, and banking solutions.",
    description: "Banking and financial services"
  },
  {
    id: 6,
    name: "Tata Capital",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Tata_Capital_Logo-01.jpg/1280px-Tata_Capital_Logo-01.jpg",
    caption: "Trusted NBFC providing personal loans, business loans, and wealth management services.",
    description: "NBFC and financial services"
  },
  {
    id: 7,
    name: "Aditya Birla Finance",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfxlnMZfOmkwnYTYiM4OE55zLfo54MLwvJGQ&s",
    caption: "Provides a wide range of lending solutions including personal and SME loans.",
    description: "Corporate and retail lending"
  }
];

export default function Scroll() {
    const [activeIndex, setActiveIndex] = useState(2); // Start with center item
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-advance the carousel every 3 seconds
    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? partners.length - 1 : prevIndex - 1
        );
        setIsAutoPlaying(false);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length);
        setIsAutoPlaying(false);
    };

    const goToIndex = (index) => {
        setActiveIndex(index);
        setIsAutoPlaying(false);
    };

    // Calculate which items to display (always show 5 items with active in center)
    const getVisibleItems = () => {
        const result = [];
        const totalItems = partners.length;

        // Always show 5 items with active in the center
        for (let i = -2; i <= 2; i++) {
            let index = (activeIndex + i + totalItems) % totalItems;
            result.push({
                ...partners[index],
                position: i, // -2, -1, 0, 1, 2 (0 is center)
                isActive: i === 0
            });
        }

        return result;
    };

    const visibleItems = getVisibleItems();

    return (
        <section className="bg-gradient-to-b from-purple-100 via-white to-purple-100 py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h3 className="text-[#00004a] text-4xl font-semibold tracking-wide">OUR PARTNERS NETWORK</h3>
                <h2 className="mt-6 text-3xl md:text-2xl font-medium text-[#00004a]">
                    Harness our extensive logistics expertise and strong alliances
                </h2>

                {/* Carousel container */}
                <div className="mt-12 relative">
                    {/* Navigation arrows */}
                    {/* <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 focus:outline-none"
                        aria-label="Previous partner"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 focus:outline-none"
                        aria-label="Next partner"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button> */}

                    {/* Carousel track - always show 5 items with active in center */}
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center w-full max-w-4xl">
                            {visibleItems.map((item) => {
                                const scale = 1 - Math.abs(item.position) * 0.2; // Scale based on position
                                const opacity = 1 - Math.abs(item.position) * 0.4; // Opacity based on position

                                return (
                                    <div
                                        key={`${item.id}-${item.position}`}
                                        className={`flex flex-col items-center transition-all duration-500 mx-2 ${item.isActive ? 'z-10' : 'z-0'
                                            }`}
                                        style={{
                                            transform: `scale(${scale})`,
                                            opacity: opacity,
                                            flex: item.isActive ? '0 0 25%' : '0 0 18%',
                                        }}
                                        onClick={() => {
                                            // Calculate the actual index to navigate to
                                            let newIndex = (activeIndex + item.position + partners.length) % partners.length;
                                            goToIndex(newIndex);
                                        }}
                                    >
                                        <div
                                            className={`rounded-xl p-4 bg-white backdrop-blur-sm shadow-sm transition-all duration-700 ${item.isActive
                                                ? 'shadow-xl ring-2 ring-purple-400'
                                                : 'shadow-md'
                                                }`}
                                        >
                                            <img
                                                loading='lazy'
                                                src={item.logo}
                                                alt={item.name}
                                                className="h-16 w-28 md:h-20 object-contain mx-auto"
                                            />
                                        </div>
                                        {/* <span
                                            className={`mt-3 text-sm md:text-base transition-all duration-300 ${item.isActive
                                                ? 'text-gray-900 font-semibold'
                                                : 'text-gray-500'
                                                }`}
                                        >
                                            {item.name}
                                        </span> */}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Indicator dots */}
                    {/* <div className="flex justify-center mt-8 space-x-2">
                        {partners.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'bg-purple-500 scale-125'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to partner ${index + 1}`}
                            />
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
}