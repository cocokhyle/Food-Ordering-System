import Image from 'next/image';
import { Suspense } from 'react';
import ProductCarousel from '@/components/product_carousel';
import ProductDetails from './(pages)/products/[productId]/page';
import Product_Cards from '@/components/product_cards';
import Pagination from '@/components/pagination';

export default function Home() {
  return (
    <main className=''>
      <Suspense fallback='Loading...'>
        <div className='grid gap-3 pt-3'>
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
