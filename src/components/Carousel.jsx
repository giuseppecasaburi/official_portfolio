import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function Carousel({ imgArr }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imgArr.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="slider-wrapper">
                <div className="slider-container">
                    <div
                        className="slider-track"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`
                        }}
                    >
                        {imgArr.map((img, index) => (
                            <div key={index} className="slide">
                                <div className="mc-card">
                                    <div className="top">
                                        <div className="img">
                                            <img
                                                src={img}
                                                alt="Ciao"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={prevSlide}
                    className="nav-button prev-button"
                    aria-label="Slide precedente"
                >
                    <FontAwesomeIcon icon={faArrowLeft} color="blue"/>
                </button>

                <button
                    onClick={nextSlide}
                    className="nav-button next-button"
                    aria-label="Slide successivo"
                >
                    <FontAwesomeIcon icon={faArrowRight} color="blue"/>
                </button>
            </div>

            <div className="flex indicatori">
                <div className="indicators">
                    {imgArr.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            aria-label={`Vai alla slide ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="counter">
                    {currentIndex + 1} di {imgArr.length}
                </div>
            </div>
        </>
    );
};

export default Carousel;