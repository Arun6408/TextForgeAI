'use client'
import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
const Header = () => {
  const router = useRouter();
  const login = () =>{
    router.push('/sign-in');
  }
  const openDashBoard = () =>{
    router.push('/dashboard');
  }
  const width = (window.screen.width > 500 ) ? 120 :80 ;
  return (
    <div className='w-full max-h-20 border-b border-gray-400 px-10 py-5 flex items-center justify-between'>
        <Image src={"/logo.svg"} alt="logo" width={width} height={100} onClick={openDashBoard} />
        <Button variant={'secondary'} className='px-6 md:px-9 hover:scale-105 hover:bg-transparent border border-gray-400 bg-transparent font-medium text-black transition-all z-10' onClick={login}>Login</Button>
    </div>
  )
}

export default Header