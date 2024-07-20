import Pagination from '@/components/pagination';
import Product_Cards from '@/components/product_cards';
import { Suspense } from 'react';
import ProductCarousel from '@/components/product_carousel';

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
