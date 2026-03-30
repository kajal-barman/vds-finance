import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { landingSlides } from '../../data';

const incrementsPerSlide = 100;

// Improved animation variants
const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        position: 'absolute'
    }),
    center: {
        x: 0,
        opacity: 1,
        position: 'relative'
    },
    exit: (direction) => ({
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        position: 'absolute'
    })
};

const arrowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};

const LandingPage = () => {
    const [counter, setCounter] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [direction, setDirection] = useState(0);
    const intervalRef = useRef(null);

    const currentSlide = Math.floor(counter / incrementsPerSlide) % landingSlides.length;
    const slide = landingSlides[currentSlide];

    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setCounter((prev) => prev + 1);
            }, 50);
        }
        return () => clearInterval(intervalRef.current);
    }, [isPaused]);

    const handleSlideChange = (index) => {
        const newDirection = index > currentSlide ? 1 : -1;
        setDirection(newDirection);
        setCounter(index * incrementsPerSlide);
        clearInterval(intervalRef.current);
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setCounter((prev) => prev + 1);
            }, 50);
        }
    };

    const handleInteractionStart = () => {
        setIsPaused(true);
        setIsHovered(true);
        clearInterval(intervalRef.current);
    };

    const handleInteractionEnd = () => {
        setIsPaused(false);
        setIsHovered(false);
    };

    const goToNextSlide = () => {
        const nextSlide = (currentSlide + 1) % landingSlides.length;
        setDirection(1);
        handleSlideChange(nextSlide);
    };

    const goToPrevSlide = () => {
        const prevSlide = currentSlide === 0 ? landingSlides.length - 1 : currentSlide - 1;
        setDirection(-1);
        handleSlideChange(prevSlide);
    };

    return (
        <section
            className="relative w-full  via-white to-white md:mt-0 mt-10 flex flex-col items-center justify-center overflow-hidden"
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
        >
            {/* Navigation Arrows */}
            <AnimatePresence>
                {isHovered && (
                    <>
                        <motion.button
                            onClick={goToPrevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm md:p-3 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                            aria-label="Previous slide"
                            variants={arrowVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <FaChevronLeft className="text-gray-800" size={20} />
                        </motion.button>
                        <motion.button
                            onClick={goToNextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm md:p-3 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                            aria-label="Next slide"
                            variants={arrowVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <FaChevronRight className="text-gray-800" size={20} />
                        </motion.button>
                    </>
                )}
            </AnimatePresence>

            {/* Main Slides Container */}
            <div className="relative w-full md:h-[83vh] min-h-[80vh] overflow-hidden rounded-b-3xl">
                <AnimatePresence custom={direction} initial={false}>
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className={`w-full h-full flex bg-gradient-to-t ${slide.fromBg || 'from-purple-100'} to-white flex-col md:flex-row items-center justify-center px-2 md:px-6 gap-3`}
                    >
                        <div className="flex-1 z-10 space-y-6 flex md:justify-start justify-center flex-col md:items-start items-center">
                            <span className={`inline-block w-fit text-xs font-semibold uppercase py-1 px-4 rounded-full shadow ${slide.punchBgColor} ${slide.punchTextColor}`}>
                                {slide.punch}
                            </span>
                            <slide.CustomComponent />
                            <h1 className="text-6xl md:text-[4.3rem] font-bold md:text-start text-[#00004a] text-center z-[10]">
                                {slide.title}
                            </h1>
                            <p className="text-xl text-[#00004a] md:text-start text-center">
                                {slide.subtitle}
                            </p>
                            <Link to={slide.link} className='mt-3 z-10'>
                                <button className={`inline-flex border items-center text-xs uppercase gap-2 py-3 px-6 ${slide.btnBgColor || 'border-gray-200'} ${slide.btnTextColor} rounded-lg font-medium hover:scale-105 cursor-pointer transition`}>
                                    {slide.buttonText}
                                    <FaChevronRight size={10} />
                                </button>
                            </Link>
                        </div>

                        <div className={`flex-1 flex w-full h-full ${slide?.isCenter ? 'self-center' : 'self-end'} md:mt-0 mt-4`}>
                            <img
                                loading='lazy'
                                className='w-full h-full object-contain'
                                src={slide.image}
                                alt={slide.title}
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="transform flex space-x-2 absolute bottom-0 mb-3">
                {landingSlides.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        className={`w-4 h-2 rounded-full border transition-colors duration-300 ${currentSlide === index ? 'scale-120' : ''} ${slide.btnBgColor} ${slide.btnTextColor}`}
                        aria-label={`Go to slide ${index + 1}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                            width: currentSlide === index ? 24 : 16,
                            backgroundColor: currentSlide === index ? slide.btnBgColor?.replace('bg-', '') : 'rgba(255, 255, 255, 0.5)'
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    />
                ))}
            </div>
        </section>
    );
};

export default LandingPage;  