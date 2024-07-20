'use client';
import { stringify } from 'querystring';
import { getFilteredProductDetails } from './api/action';
import { useState, useEffect, Suspense } from 'react';
import EasOutButton from '@/components/ease-out_button';
import ItemCard from '@/components/item-cards';

interface ProductDetails {
  id: number;
  imgLink: string;
  title: string;
  price: number;
  badge: string;
  description: string;
  categories: string[];
}

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await getFilteredProductDetails(params.productId);
        console.log('fetch data:', stringify(product));
        setProducts(product);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params.productId]);

  console.log();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!products) {
    return <div>No product found.</div>;
  }

  return (
    <>
      <div className='flex justify-center p-3'>
        {products.map((product) => (
          <div key={product.id}>
            <div className='w-fit flex flex-col gap-3'>
              <EasOutButton title={'Product Details'} route={'/'} />
              <ItemCard
                items={products}
                hideCheckbox={true}
                hideButton={false}
              />
              <div className='card card-compact bg-base-100 p-3 shadow-lg'>
                <div className='divider divider-start'>
                  Product Details of {product.title}
                </div>
              </div>
              <div className='card card-compact bg-base-100 p-3 shadow-lg'>
                <div className='divider divider-start'>
                  Ratings and Reviews of {product.title}
                </div>
                <div>
                  <div className='w-[5rem]'>
                    <figure>
                      <img src={product.imgLink} alt='Shoes' />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
