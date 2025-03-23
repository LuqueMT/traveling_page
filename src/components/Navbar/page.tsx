import React from 'react';
import Logo from '../../assets/icon.svg';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
        <nav className='w-full items-center justify-between mt-8 flex'>
            <Image className='h-10 w-10' src={Logo} alt='logo avião'/>
            <ul className='flex gap-8 items-center'>
                <Link href='#price' className='font-medium text-stone-800 hover:text-lime-500 transition-colors'>Preços</Link>
                <Link href='#about' className='font-medium text-stone-800 hover:text-lime-500 transition-colors'>Sobre</Link>
                <Link href='#home' className='font-medium text-stone-800 hover:text-lime-500 transition-colors'>Blog</Link>
                <Link href='#home' className=' py-3 px-5 font-medium text-white bg-lime-500 hover:bg-lime-700 transition-colors rounded-full'>Começar</Link>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
