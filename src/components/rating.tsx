export default function Rating({ rating }: { rating: number }) {
  return (
    <>
      <div className='rating rating-sm'>
        {[...Array(5)].map((_, index) => (
          <input
            key={index}
            type='radio'
            className='mask mask-star-2 bg-orange-400'
            checked={rating === index + 1}
            disabled
          />
        ))}
      </div>
    </>
  );
}
