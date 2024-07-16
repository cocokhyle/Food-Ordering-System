import Pagination from '@/app/components/pagination';
import Product_Cards from '@/app/components/product_cards';
import { Suspense } from 'react';
import ProductCarousel from '@/app/components/product_carousel';

export default function Product() {
  return (
    <main>
      <Suspense fallback='Loading...'>
        <div className='grid gap-3'>
          <ProductCarousel />
          <Product_Cards />
        </div>

        <div className='flex justify-center items-center mt-10'>
          <Pagination />
        </div>
      </Suspense>
    </main>
  );
}
