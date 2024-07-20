'use client';
import EasOutButton from '@/components/ease-out_button';
import ItemCard from '@/components/item-cards';

export default function Cart() {
  const productDetails = [
    {
      id: 1,
      title: 'Shoes',
      description: 'If a dog chews shoes whose shoes does he choose?',
      price: 499,
      imgLink:
        'https://lh3.googleusercontent.com/d/1-Fx4NLnwH_XnrMC9Kbmz2jxk7VpcJc1A',
    },
    {
      id: 1,
      title: 'Shoes',
      description: 'If a dog chews shoes whose shoes does he choose?',
      price: 399,
      imgLink:
        'https://lh3.googleusercontent.com/d/15R-dM0d6MyujbDpXTm0Uuk7igMGFKlLp',
    },
  ];
  return (
    <main>
      <div className='h-auto w-full pt-10 flex flex-col items-center mb-10'>
        <div className=''>
          <EasOutButton title='My Cart' route='/' />
          <div className='card lg:card-side bg-base-100 shadow-xl flex w-full p-5 h-fit mt-2 justify-between'>
            <div className='flex gap-3'>
              <input
                type='checkbox'
                defaultChecked
                className='checkbox checkbox-primary'
              />
              <h1>Select All (Items: 3)</h1>
            </div>
            <div>
              <button>Delete</button>
            </div>
          </div>
          <ItemCard
            items={productDetails}
            hideButton={true}
            hideCheckbox={false}
          />
          <div className='flex flex-row items-center justify-between mt-10'>
            <div className='p-3 rounded-md'>
              <h1 className='text-[20px] font-bold'>Total: $898</h1>
            </div>
            <div className=''>
              <div className='card-actions'>
                <button className='btn  bg-blue-700 text-white'>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
