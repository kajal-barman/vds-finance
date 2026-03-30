import image1 from './Asset/image1.png'
import image2 from './Asset/image2.png'
import image3 from './Asset/image3.png'
import image4 from './Asset/image4.png'
import image5 from './Asset/image5.png'
import image6 from '../src/Asset/image6.png'
import image7 from '../src/Asset/image7.png'
export const landingSlides = [
    {
        title: 'Financial Infrastructure That Moves With You',
        subtitle: 'Flexible banking solutions designed for modern financial demands',
        buttonText: 'Learn How',
        link: '/contact-us',
        fromBg: 'from-orange-100',
        image: image1,
        punch: 'Global Reach, Local Care',
        punchBgColor: 'bg-orange-100',
        btnBgColor: 'bg-orange-100 border-orange-400',
        btnTextColor: 'text-orange-600',
        punchTextColor: 'text-orange-700',
        CustomComponent: () => {
            const gridLines = () => {
                const lines = [];
                const spacing = 50;
                for (let i = -10; i <= 10; i++) {
                    lines.push(i * spacing);
                }
                return lines;
            };
            return (
                <div
                    className="w-full h-full absolute inset-0 z-[-1] pointer-events-none"
                    style={{
                        maskImage:
                            'radial-gradient(circle at center, black 30%, transparent 90%)',
                        WebkitMaskImage:
                            'radial-gradient(circle at center, black 30%, transparent 90%)',
                    }}
                >
                    {gridLines()?.map((pos, i) => (
                        <div
                            key={`v-${i}`}
                            className="absolute w-px h-full bg-gray-400 opacity-10"
                            style={{ left: `calc(50% + ${pos}px)` }}
                        />
                    ))}
                    {gridLines()?.map((pos, i) => (
                        <div
                            key={`h-${i}`}
                            className="absolute h-px w-full bg-gray-400 opacity-10"
                            style={{ top: `calc(50% + ${pos}px)` }}
                        />
                    ))}
                </div>
            );
        },
    },
    {
        title: 'Fast Transactions, Defining Trust & Reliability',
        subtitle: 'Reliable financial solutions to move your business forward',
        buttonText: 'Start Banking',
        link: '/register',
        image: image2,
        punch: 'Instant Transfers',
        fromBg: 'from-yellow-100',
        punchBgColor: 'bg-yellow-100',
        punchTextColor: 'text-yellow-700',
        btnBgColor: 'bg-yellow-100 border-yellow-400',
        btnTextColor: 'text-yellow-600',
        CustomComponent: () => {
            const gridLines = () => {
                const lines = [];
                const spacing = 50;
                for (let i = -10; i <= 10; i++) {
                    lines.push(i * spacing);
                }
                return lines;
            };
            return (
                <div
                    className="w-full h-full absolute inset-0 z-[-1] pointer-events-none"
                    style={{
                        maskImage:
                            'radial-gradient(circle at center, black 30%, transparent 90%)',
                        WebkitMaskImage:
                            'radial-gradient(circle at center, black 30%, transparent 90%)',
                    }}
                >
                    {gridLines().map((pos, i) => (
                        <div
                            key={`v-${i}`}
                            className="absolute w-px h-full bg-gray-400 opacity-10"
                            style={{ left: `calc(50% + ${pos}px)` }}
                        />
                    ))}
                    {gridLines().map((pos, i) => (
                        <div
                            key={`h-${i}`}
                            className="absolute h-px w-full bg-gray-400 opacity-10"
                            style={{ top: `calc(50% + ${pos}px)` }}
                        />
                    ))}
                </div>
            );
        },
    },
    {
        title: 'Smart Finance, Simple Solutions',
        subtitle: 'Safe, secure, and seamless banking every time',
        buttonText: 'Explore Services',
        link: '/services',
        image: image3,
        fromBg: 'from-red-100',
        imageClassName: 'absolute h-[34rem] left-[-5%] md:block hidden',
        punch: 'Trusted by Businesses Nationwide',
        punchBgColor: 'bg-red-100',
        punchTextColor: 'text-red-700',
        btnBgColor: 'bg-red-100 border-red-400',
        btnTextColor: 'text-red-600',
        CustomComponent: () => {
            const gridLines = () => {
                const lines = [];
                const spacing = 50;
                for (let i = -10; i <= 10; i++) {
                    lines.push(i * spacing);
                }
                return lines;
            };
            return (
                <div
                    className="w-full h-full absolute inset-0 z-[-1] pointer-events-none"
                    style={{
                        maskImage:
                            'radial-gradient(circle at center, black 30%, transparent 90%)',
                        WebkitMaskImage:
                            'radial-gradient(circle at center, black 30%, transparent 90%)',
                    }}
                >
                    {gridLines().map((pos, i) => (
                        <div
                            key={`v-${i}`}
                            className="absolute w-px h-full bg-gray-400 opacity-10"
                            style={{ left: `calc(50% + ${pos}px)` }}
                        />
                    ))}
                    {gridLines().map((pos, i) => (
                        <div
                            key={`h-${i}`}
                            className="absolute h-px w-full bg-gray-400 opacity-10"
                            style={{ top: `calc(50% + ${pos}px)` }}
                        />
                    ))}
                </div>
            );
        },
    },
    {
        title: 'Seamless Banking, Your Financial Promise',
        subtitle: 'Technology-driven efficiency from account opening to wealth management',
        buttonText: 'View Ecosystem',
        link: '/contact-us',
        fromBg: 'from-violet-100',
        imageClassName: 'absolute h-[34rem] left-[-5%] md:block hidden',
        image: image4,
        punch: 'Optimized Portfolios, Lower Fees',
        punchBgColor: 'bg-violet-100',
        punchTextColor: 'text-violet-700',
        btnBgColor: 'bg-violet-100 border-violet-400',
        btnTextColor: 'text-violet-600',
        CustomComponent: () => {
            const gridLines = () => {
                const lines = [];
                const spacing = 50;
                for (let i = -10; i <= 10; i++) {
                    lines.push(i * spacing);
                }
                return lines;
            };
            return (
                <div
                    className="w-full h-full absolute inset-0 z-[-1] pointer-events-none"
                    style={{
                        maskImage:
                            'radial-gradient(circle at center, black 30%, transparent 90%)',
                        WebkitMaskImage:
                            'radial-gradient(circle at center, black 30%, transparent 90%)',
                    }}
                >
                    {gridLines().map((pos, i) => (
                        <div
                            key={`v-${i}`}
                            className="absolute w-px h-full bg-gray-400 opacity-10"
                            style={{ left: `calc(50% + ${pos}px)` }}
                        />
                    ))}
                    {gridLines().map((pos, i) => (
                        <div
                            key={`h-${i}`}
                            className="absolute h-px w-full bg-gray-400 opacity-10"
                            style={{ top: `calc(50% + ${pos}px)` }}
                        />
                    ))}
                </div>
            );
        },
    },
    {
        title: 'Finance That Works Silently, Delivers Loudly',
        subtitle: 'Unseen efficiency, unmatched results for your business',
        buttonText: 'Discover More',
        link: '/contact-us',
        image: image5,
        isCenter: true,
        punch: 'Less Hassle, More Growth',
        punchBgColor: 'bg-purple-100',
        fromBg: 'from-purple-100',
        punchTextColor: 'text-purple-700',
        btnBgColor: 'bg-purple-100 border-purple-400',
        btnTextColor: 'text-purple-600',
        CustomComponent: () => {
            const gridLines = () => {
                const lines = [];
                const spacing = 50;
                for (let i = -10; i <= 10; i++) {
                    lines.push(i * spacing);
                }
                return lines;
            };
            return (
                <div
                    className="w-full h-full absolute inset-0 z-[-1] pointer-events-none"
                    style={{
                        maskImage:
                            'radial-gradient(circle at center, black 30%, transparent 90%)',
                        WebkitMaskImage:
                            'radial-gradient(circle at center, black 30%, transparent 90%)',
                    }}
                >
                    {gridLines().map((pos, i) => (
                        <div
                            key={`v-${i}`}
                            className="absolute w-px h-full bg-gray-400 opacity-10"
                            style={{ left: `calc(50% + ${pos}px)` }}
                        />
                    ))}
                    {gridLines().map((pos, i) => (
                        <div
                            key={`h-${i}`}
                            className="absolute h-px w-full bg-gray-400 opacity-10"
                            style={{ top: `calc(50% + ${pos}px)` }}
                        />
                    ))}
                </div>
            );
        },
    },
];