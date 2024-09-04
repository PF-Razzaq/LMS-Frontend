import React, { useState } from 'react';

const MYCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === 4 ? 1 : currentSlide + 1);
    };

    const handlePrevSlide = () => {
        setCurrentSlide(currentSlide === 1 ? 4 : currentSlide - 1);
    };

    return (
        <>
            <div className="carousel w-full relative">
                <div className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full object-cover h-64 md:h-96"
                        alt="Slide 1"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
                        <h3 className="text-lg md:text-2xl">Slide 1 Heading</h3>
                        <p className="text-sm md:text-lg">Some descriptive text for the first slide.</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={handlePrevSlide} className="btn btn-circle">❮</button>
                        <button onClick={handleNextSlide} className="btn btn-circle">❯</button>
                    </div>
                </div>
                <div className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full object-cover h-64 md:h-96"
                        alt="Slide 2"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
                        <h3 className="text-lg md:text-2xl">Slide 2 Heading</h3>
                        <p className="text-sm md:text-lg">Some descriptive text for the second slide.</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={handlePrevSlide} className="btn btn-circle">❮</button>
                        <button onClick={handleNextSlide} className="btn btn-circle">❯</button>
                    </div>
                </div>
                <div className={`carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full object-cover h-64 md:h-96"
                        alt="Slide 3"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
                        <h3 className="text-lg md:text-2xl">Slide 3 Heading</h3>
                        <p className="text-sm md:text-lg">Some descriptive text for the third slide.</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={handlePrevSlide} className="btn btn-circle">❮</button>
                        <button onClick={handleNextSlide} className="btn btn-circle">❯</button>
                    </div>
                </div>
                <div className={`carousel-item relative w-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full object-cover h-64 md:h-96"
                        alt="Slide 4"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
                        <h3 className="text-lg md:text-2xl">Slide 4 Heading</h3>
                        <p className="text-sm md:text-lg">Some descriptive text for the fourth slide.</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={handlePrevSlide} className="btn btn-circle">❮</button>
                        <button onClick={handleNextSlide} className="btn btn-circle">❯</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MYCarousel;
