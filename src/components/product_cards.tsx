'use client';

import { useState, useRef, useEffect } from 'react';

import Link from 'next/link';
import { getProductDetails } from '../app/api/action';
import Rating from './rating';

interface ProductDetails {
  id: number;
  imgLink: string;
  title: string;
  price: number;
  badge: string;
  description: string;
  categories: string[];
  rating: number;
  sales: number;
}

export default function Product_Cards() {
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState();

  const [productId, setProductId] = useState(0);
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productDetails = await getProductDetails(); // Assuming getData returns an object with 'product' property
        setProducts(productDetails); // Assuming 'product' is a single product object
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getClassName = (badge: string): string => {
    if (badge === 'New') return 'badge badge-secondary';
    if (badge === 'Sale') return 'badge badge-error';
    if (badge === 'Limited') return 'badge badge-warning';
    return 'badge badge-neutral';
  };

  const openModal = (productId: number) => {
    if (modalRef.current) {
      modalRef.current.showModal();
      setProductId(productId);
      console.log(`Clicked product ID: ${productId}`);
      // You can use the productId here for any additional logic or state management
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
        {products.map((product) => (
          <div key={product.id}>
            <div
              className='card bg-base-100 shadow-md '
              onClick={() => openModal(product.id)}>
              <div className=' rounded-lg'>
                <div className=' overflow-hidden h-[20svh] bg-white flex justify-center items-center rounded-t-lg'>
                  <img
                    src={product.imgLink}
                    alt='Product Image'
                    className='h-[25svh]'
                  />
                </div>
                <div className='card-body p-3'>
                  <div className='flex justify-end'>
                    {product.categories.map((cat, index) => (
                      <div key={index}>
                        <div className='badge badge-outline text-[1svh]'>
                          {cat}
                        </div>
                      </div>
                    ))}
                  </div>
                  <h2 className='card-title'>
                    {product.title}
                    <div className={getClassName(product.badge)}>
                      {product.badge}
                    </div>
                  </h2>
                  <h1 className='card-title text-[3svh]'>${product.price}</h1>
                  <p className='text-[1.5svh]'>{product.description}</p>

                  <div className='flex items-center justify-between'>
                    {/* Rating Component */}
                    <div className='flex items-center'>
                      <div>
                        <h6 className='text-[1svh]'>{product.sales}k sold</h6>
                      </div>
                      <div className='divider divider-horizontal m-0'></div>
                      <Rating rating={product.rating} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Dialog */}
      <dialog ref={modalRef} className='modal'>
        <div className='modal-box w-fit p-3 m-3'>
          <div className='h-[30svh] flex overflow-hidden items-center justify-center rounded-lg bg-white'>
            <img
              src={products[productId].imgLink}
              alt='Product Image'
              className='w-[40svh]'
            />
          </div>

          <div className='card-actions justify-end mt-3'>
            {products[productId].categories.map((cat, index) => (
              <div key={index}>
                <div className='badge badge-outline text-[1.3svh] gap-2'>
                  {cat}
                </div>
              </div>
            ))}
          </div>
          <div className='card-body pt-0'>
            <h4 className='card-title'>
              {products[productId].title}
              <div className={getClassName(products[productId].badge)}>
                {products[productId].badge}
              </div>
            </h4>
            <p className='text-[13px]'>{products[productId].description}</p>
            <h1 className='font-bold text-[5svh]'>
              ${products[productId].price}
            </h1>
          </div>
          <div className='modal-action m-0 pb-3'>
            <form method='dialog' className='w-full pl-5 pr-5'>
              <Link
                href={`/products/${products[productId].id}`}
                className='btn flex flex-row justify-between items-center w-full'>
                <div className='flex gap-3'>
                  {/* Rating component */}
                  <Rating rating={products[productId].rating} />
                  <div className='flex justify-end items-center'>
                    <p className='text-[1.4svh]'>Rating and reviews</p>
                  </div>
                </div>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m8.25 4.5 7.5 7.5-7.5 7.5'
                  />
                </svg>
              </Link>

              {/* Add to cart btn */}
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
            </form>
          </div>
        </div>
      </dialog>
    </main>
  );
}
