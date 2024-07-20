import Rating from './rating';

interface CardItems {
  id: number;
  title: string;
  description: string;
  price: number;
  imgLink: string;
}

export default function ItemCard({
  items,
  hideButton,
  hideCheckbox,
  imgSize,
}: {
  items: CardItems[];
  hideButton: boolean;
  hideCheckbox: boolean;
  imgSize: string;
}) {
  return (
    <main>
      {items.map((product) => (
        <div
          key={product.id}
          className='card lg:card-side bg-base-100 shadow-xl flex w-fit mt-2 relative'>
          <div
            className={
              'flex flex-col p-3 gap-y-2 bg-white rounded-l-lg items-center sm:rounded-none sm:rounded-t-lg md:rounded-none md:rounded-l-lg'
            }>
            <div className='  flex w-[35svh]  sm:rounded-lg sm:items-center'>
              <img
                src={product.imgLink}
                alt='Album'
                className='object-contain'
              />
            </div>
            <div className='flex items-center justify-between bg-slate-300 rounded-md'>
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
                  d='M15.75 19.5 8.25 12l7.5-7.5'
                />
              </svg>
              <div className='overflow-x-hidden flex-nowrap flex w-max '>
                <img
                  src={product.imgLink}
                  alt='Album'
                  className='object-contain w-[8svh] flex-shrink-0'
                />
                <img
                  src={product.imgLink}
                  alt='Album'
                  className='object-contain w-[8svh]  flex-shrink-0'
                />
                <img
                  src={product.imgLink}
                  alt='Album'
                  className='object-contain w-[8svh] flex-shrink-0'
                />
                <img
                  src={product.imgLink}
                  alt='Album'
                  className='object-contain w-[8svh] flex-shrink-0'
                />
                <img
                  src={product.imgLink}
                  alt='Album'
                  className='object-contain w-[8svh] flex-shrink-0'
                />
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
            </div>
          </div>

          <div className='card-body '>
            <div className='grid grid-row-4 gap-y-3'>
              <div>
                <h2 className='card-title'>{product.title}</h2>
                <p>{product.description}</p>
              </div>

              <div className=''>
                <h2 className='card-title text-[40px] mb-3'>
                  ${product.price}
                </h2>
              </div>
              <div className='flex items-center'>
                <div>
                  <h6 className='text-[2svh]'>1.5k sold</h6>
                </div>
                <div className='divider divider-horizontal m-0'></div>
                <Rating rating={4} />
              </div>
              <div className='join'>
                <button className='join-item btn'>-</button>
                <button className='join-item btn'>1</button>
                <button className='join-item btn'>+</button>
              </div>
            </div>
            {/* Add to cart and Buy Button */}
            {!hideButton && (
              <div className='card-actions absolute bottom-5'>
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
            )}
          </div>
          {!hideCheckbox && (
            <div className='flex justify-center p-10'>
              <input
                type='checkbox'
                defaultChecked
                className='checkbox checkbox-primary'
              />
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
