'use client';

import { useState, useRef, useEffect } from 'react';

import Link from 'next/link';
import { getProductDetails } from '../api/action';

interface ProductDetails {
  id: number;
  imgLink: string;
  title: string;
  price: number;
  badge: string;
  description: string;
  categories: string[];
}

export default function Product_Cards() {
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [loading, setLoading] = useState(true);

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
      <div className='grid grid-cols-5 gap-5'>
        {products.map((product) => (
          <div key={product.id}>
            <div
              className='card bg-base-100 shadow-md flex flex-wrap'
              onClick={() => openModal(product.id)}>
              <div className=' rounded-lg'>
                <figure>
                  <img src={product.imgLink} alt='Product Image' />
                </figure>
                <div className='card-body'>
                  <h1 className='font-bold text-[30px]'>${product.price}</h1>
                  <h2 className='card-title'>
                    {product.title}
                    <div className={getClassName(product.badge)}>
                      {product.badge}
                    </div>
                  </h2>
                  <p>{product.description}</p>
                  <div className='card-actions justify-end'>
                    {product.categories.map((cat, index) => (
                      <div key={index}>
                        <div className='badge badge-outline'>{cat}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Dialog */}
      <dialog ref={modalRef} className='modal'>
        <div className='modal-box'>
          <figure>
            <img src={products[productId].imgLink} alt='Product Image' />
          </figure>

          <div className='card-actions justify-end mt-5'>
            {products[productId].categories.map((cat, index) => (
              <div key={index}>
                <div className='badge badge-outline'>{cat}</div>
              </div>
            ))}
          </div>
          <div className='card-body'>
            <h1 className='font-bold text-[30px]'>
              ${products[productId].price}
            </h1>
            <h2 className='card-title'>
              {products[productId].title}
              <div className={getClassName(products[productId].badge)}>
                {products[productId].badge}
              </div>
            </h2>
            <p>{products[productId].description}</p>
          </div>
          <div className='modal-action'>
            <form method='dialog' className='w-full pl-5 pr-5'>
              <Link
                href={`/products/${products[productId].id}`}
                className='btn flex flex-row justify-between items-center w-full'>
                <div className=''>
                  <div className='rating rating-sm'>
                    <input
                      type='radio'
                      name='rating-5'
                      className='mask mask-star-2 bg-orange-400'
                      disabled
                    />
                    <input
                      type='radio'
                      name='rating-5'
                      className='mask mask-star-2 bg-orange-400'
                      disabled
                    />
                    <input
                      type='radio'
                      name='rating-5'
                      className='mask mask-star-2 bg-orange-400'
                      disabled
                    />
                    <input
                      type='radio'
                      name='rating-5'
                      className='mask mask-star-2 bg-orange-400'
                      defaultChecked
                      disabled
                    />
                    <input
                      type='radio'
                      name='rating-5'
                      className='mask mask-star-2 bg-orange-400'
                      disabled
                    />
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
