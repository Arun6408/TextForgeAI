"use client"
import Link from 'next/link';

const page = () => {
  return (
    <div className='flex w-screen h-screen justify-center items-center'>
      <Link href={'/landing'} className='text-blue-500 underline'>Please go to Landing Page</Link>
    </div>
  );
}

export default page