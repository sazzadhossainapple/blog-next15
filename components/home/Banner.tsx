'use client';

import { useState, useEffect } from 'react';
import {
    IoArrowForward,
    IoBookOutline,
    IoTrendingUp,
    IoChevronBack,
    IoChevronForward,
} from 'react-icons/io5';

const slides = [
    {
        title: 'Insights, Ideas, and Innovation',
        description:
            'Discover the latest trends in technology, development, and design through expert insights and practical tutorials.',
        primaryButton: { text: 'Explore Articles', icon: IoBookOutline },
        secondaryButton: { text: 'Latest Trends', icon: IoTrendingUp },
        backgroundImage: '/modern-web-dev-workspace.png',
    },
    {
        title: 'Master Modern Web Development',
        description:
            'Learn cutting-edge frameworks, tools, and best practices that will elevate your development skills to the next level.',
        primaryButton: { text: 'Start Learning', icon: IoBookOutline },
        secondaryButton: { text: 'View Tutorials', icon: IoTrendingUp },
        backgroundImage: '/typescript-code-on-screen.png',
    },
    {
        title: 'Design Systems & UI Excellence',
        description:
            'Explore comprehensive guides on creating beautiful, accessible, and scalable user interfaces with modern design principles.',
        primaryButton: { text: 'Design Guide', icon: IoBookOutline },
        secondaryButton: { text: 'UI Components', icon: IoTrendingUp },
        backgroundImage: '/design-system-components.png',
    },
];

export function HeroBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const currentSlideData = slides[currentSlide];

    return (
        <section className="relative text-white py-20 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
                style={{
                    backgroundImage: `url(${currentSlideData.backgroundImage})`,
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#312c85]/80 to-[#6d11b0]/80"></div>
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="container mx-auto px-4"></div>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
                aria-label="Previous slide"
            >
                <IoChevronBack className="h-6 w-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
                aria-label="Next slide"
            >
                <IoChevronForward className="h-6 w-6" />
            </button>

            <div className=" relative z-10">
                <div className="max-w-3xl mx-auto text-center transition-all duration-500 ease-in-out">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                        {currentSlideData.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-white/90 text-pretty">
                        {currentSlideData.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md bg-white hover:bg-white/90 text-[#312c85] font-semibold transition-all">
                            <currentSlideData.primaryButton.icon className="h-5 w-5" />
                            {currentSlideData.primaryButton.text}
                            <IoArrowForward className="h-5 w-5" />
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md border border-white text-white hover:bg-white hover:text-[#312c85] font-semibold bg-transparent transition-all">
                            <currentSlideData.secondaryButton.icon className="h-5 w-5" />
                            {currentSlideData.secondaryButton.text}
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentSlide
                                ? 'bg-white'
                                : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
