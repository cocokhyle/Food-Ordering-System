"use client";
interface CarouselElement {
  id: number;
  srcLink: string;
}

interface CarouselProps {
  elements: CarouselElement[];
}

import React, { useState } from "react";

const Carousel: React.FC<CarouselProps> = ({ elements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + elements.length) % elements.length
    );
  };

  return (
    <main>
      <div className="carousel w-full rounded-lg">
        <div className="carousel-item relative w-full">
          <img
            src={elements[currentIndex].srcLink}
            alt={`Carousel element ${elements[currentIndex].id}`}
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={prevSlide} className="btn btn-circle">
              ❮
            </button>
            <button onClick={nextSlide} className="btn btn-circle">
              ❯
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Carousel;
