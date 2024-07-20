import { useRouter } from 'next/navigation';

export default function EasOutButton({
  title,
  route,
}: {
  title: string;
  route: string;
}) {
  const router = useRouter();

  return (
    <>
      <div className='flex items-center w-full mb-5'>
        <button
          className='text-[25px] mr-10 btn btn-circle'
          onClick={() => router.push(route)}>
          ❮
        </button>
        <div className='divider divider-start w-full'>
          <h1 className='font-bold text-[30px]'>{title}</h1>
        </div>
      </div>
    </>
  );
}
