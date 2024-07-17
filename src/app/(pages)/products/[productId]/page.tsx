'use client';
import { stringify } from 'querystring';
import { getFilteredProductDetails } from './api/action';
import { useState, useEffect } from 'react';

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
              <div className='card card-compact bg-base-100 shadow-lg'>
                <div className='card-body flex flex-row'>
                  <div className='w-[25rem]'>
                    <figure>
                      <img src={product.imgLink} alt='Shoes' />
                    </figure>
                  </div>
                  <div className='flex flex-col gap-3 ml-3'>
                    <h2 className='card-title'>{product.title}</h2>
                    <p>{product.description}</p>
                    <div className='join'>
                      <button className='join-item btn'>-</button>
                      <button className='join-item btn'>1</button>
                      <button className='join-item btn'>+</button>
                    </div>
                    <div className='card-actions '>
                      <div className='flex justify-center items-center rounded-lg pl-6 pr-6 pt-3'>
                        <div
                          role='button'
                          className='btn rounded-lg'
                          // onClick={() => router.push("/cart")}
                        >
                          <div className='indicator'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'>
                              <path
                                strokeWidth='2'
                                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                              />
                            </svg>
                          </div>
                        </div>
                        <button className='btn text-white w-full bg-blue-700'>
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card card-compact bg-base-100 p-3 shadow-lg'>
                <div className='divider divider-start'>
                  Product Details of {product.title}
                </div>
              </div>
              <div className='card card-compact bg-base-100 p-3 shadow-lg'>
                <div className='divider divider-start'>
                  Ratings and Revies of {product.title}
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
