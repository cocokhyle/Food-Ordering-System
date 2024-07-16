'use client';

import { useEffect, useState } from 'react';
import { getProductCarouselDetails } from '../api/action';

interface CarouselElement {
  id: number;
  srcLink: string;
}

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elements, setElements] = useState<CarouselElement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productDetailsCarousel = await getProductCarouselDetails();
        setElements(productDetailsCarousel);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(elements);

  useEffect(() => {
    if (elements.length === 0) {
      console.error('No elements provided to Carousel');
    }
  }, [elements]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + elements.length) % elements.length
    );
  };

  if (elements.length === 0) {
    return <div></div>;
  }

  if (!elements[currentIndex]) {
    return <div>Error: Carousel element at current index is undefined</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className='carousel w-full rounded-lg'>
        <div className='carousel-item relative w-full'>
          <img
            src={elements[currentIndex].srcLink}
            alt={`Carousel element ${elements[currentIndex].id}`}
            className='w-full'
          />
          <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
            <button onClick={prevSlide} className='btn btn-circle'>
              ❮
            </button>
            <button onClick={nextSlide} className='btn btn-circle'>
              ❯
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
