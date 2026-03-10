import React, { useState, useEffect } from 'react';

const partners = [
    {
        id: 1,
        name: 'Ecom Express',
        logo: '/Ecom-express.webp',
        caption: 'Trusted logistics partner offering end-to-end ecommerce shipping solutions across India.',
        description: "Leading e-commerce logistics provider"
    },
    {
        id: 2,
        name: 'XpressBees',
        logo: '/xpressbees.webp',
        caption: 'Fast-growing logistics company delivering speed, reliability, and nationwide reach.',
        description: "Comprehensive logistics solutions"
    },
    {
        id: 3,
        name: 'Shadowfax',
        logo: '/shadowfax.webp',
        caption: 'On-demand hyperlocal delivery network powering quick commerce and last-mile efficiency.',
        description: "Hyperlocal delivery network",
    },
    {
        id: 4,
        name: 'Shree Maruti',
        logo: '/shreemaruti.webp',
        caption: 'Leading courier and cargo services provider with strong regional and national presence.',
        description: "Reliable courier services"
    },
    {
        id: 5,
        name: 'India Post',
        logo: '/india-post.png',
        caption: 'India’s most trusted postal network enabling wide-scale delivery to every corner of the country.',
        description: "Nationwide postal service"
    },
    {
        id: 6,
        name: 'Delhivery',
        logo: '/delhivery.webp',
        caption: 'Technology-driven logistics leader specializing in express parcel, freight, and supply chain solutions.',
        description: "Technology-enabled logistics"
    },
    {
        id: 7,
        name: 'DTDC',
        logo: '/DTDC.png',
        caption: 'Global courier and logistics brand providing reliable domestic and international delivery services.',
        description: "Premier express logistics"
    },
    {
        id: 8,
        name: 'Ekart',
        logo: 'https://img-cdn.publive.online/fit-in/1200x675/afaqs/media/post_attachments/c9d7799868e9d5111913aa57ea7ba80c16bdb82d2d81d497b656f0173dcef7cd.jpg',
        caption: 'Flipkart’s in-house logistics arm enabling reliable nationwide delivery for e-commerce.',
        description: "E-commerce logistics partner"
    },
    {
        id: 9,
        name: 'Bluedart',
        logo: 'https://content.jdmagicbox.com/v2/comp/mumbai/w1/022pxx22.xx22.231020181734.e6w1/catalogue/blue-dart-express-andheri-west-mumbai-courier-services-blue-dart-89czp9kzyi-250.jpg',
        caption: 'Leading express air and integrated transportation company with global DHL network support.',
        description: "Express logistics and courier"
    },
    {
        id: 10,
        name: 'Amazon Shipping',
        logo: 'https://cdn-icons-png.flaticon.com/128/10096/10096351.png',
        caption: 'Amazon’s trusted delivery network offering speed and reliability for businesses of all sizes.',
        description: "Global e-commerce logistics"
    },
    {
        id: 11,
        name: 'DHL',
        logo: 'https://www.dhl.com/content/dam/dhl/global/core/images/teaser-image-main/dhl-logo.jpg',
        caption: 'International logistics leader specializing in global courier, parcel, and express mail services.',
        description: "Global logistics network"
    },
    {
        id: 12,
        name: 'Aramex',
        logo: 'https://cdn.prod.website-files.com/64700b7f349828a5b8dc81ab/663b9b52b6be7a96ea79c78e_img-carriers-round-aramex.svg',
        caption: 'Global provider of comprehensive logistics and transportation solutions with strong Middle East presence.',
        description: "International courier services"
    },
    {
        id: 13,
        name: 'GATI',
        logo: 'https://thecsrjournal.in/wp-content/uploads/2014/07/3-ISL-Gati-completes-maiden-coastal-voyage-from-Kandla.jpg',
        caption: 'One of India’s pioneers in express distribution and supply chain solutions.',
        description: "Express distribution specialist"
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