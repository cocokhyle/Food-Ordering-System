'use client';
import Cards from '@/app/components/cards';
import Carousel from '@/app/components/carousel';
import Pagination from '@/app/components/pagination';
import getData from './api/action';

import { useState, useEffect, Suspense } from 'react';

interface CardElement {
  id: number;
  price: number;
  imgLink: string;
  title: string;
  badge: string;
  description: string;
  categories: string[];
}
interface CarouselElement {
  id: number;
  srcLink: string;
}

export default function Product() {
  const [carouselElements, setCarouselElements] = useState<CarouselElement[]>(
    []
  );
  const [cardElements, setCardElements] = useState<CardElement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setCardElements(data.productDetails);
        setCarouselElements(data.productDetailsCarousel);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Suspense fallback='Loading...'>
        <div>
          <div>
            <Carousel elements={carouselElements} />
          </div>
        </div>
        <div className='mt-5 flex gap-3 flex-wrap'>
          {cardElements.map((element, index) => (
            <Cards
              key={index}
              id={element.id}
              price={element.price}
              imgLink={element.imgLink}
              title={element.title}
              badge={element.badge}
              description={element.description}
              categories={element.categories}
            />
          ))}
        </div>
        <div className='flex justify-center items-center mt-10'>
          <Pagination />
        </div>
      </Suspense>
    </main>
  );
}
