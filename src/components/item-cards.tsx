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
}: {
  items: CardItems[];
  hideButton: boolean;
  hideCheckbox: boolean;
}) {
  return (
    <main>
      {items.map((product) => (
        <div
          key={product.id}
          className='card lg:card-side bg-base-100 shadow-xl flex w-fit h-fit mt-2'>
          <div className='w-[25rem] p-3 flex justify-center items-center'>
            <img src={product.imgLink} alt='Album' />
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
              <div className='join'>
                <button className='join-item btn'>-</button>
                <button className='join-item btn'>1</button>
                <button className='join-item btn'>+</button>
              </div>
            </div>
            {/* Add to cart and Buy Button */}
            {!hideButton && (
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
