import Link from 'next/link'
import React from 'react'

const Navber = () => {
    return (
        <nav className='flex w-full h-[60px] bg-white/70 items-center justify-center'>
            <div className='flex max-w-[90%] w-full items-center justify-between'>
                <h1 className='mon-bolder text-3xl text-gray-900'>BLOGISTAN</h1>
                <ul className='hidden md:flex items-center gap-6'>
                    <li><Link href={'/'} className='group'><h3 className='mon-semibold text-base text-gray-700 active:text-yellow-500 group-hover:text-black uppercase'>home</h3></Link></li>
                    <li><Link href={'/blogs/blogs-library'} className='group'><h3 className='mon-semibold text-base text-gray-700 active:text-yellow-500 group-hover:text-black uppercase'>blog</h3></Link></li>
                    <li><Link href={'/categories'} className='group'><h3 className='mon-semibold text-base text-gray-700 active:text-yellow-500 group-hover:text-black uppercase'>categories</h3></Link></li>
                    <li><Link href={'/about'} className='group'><h3 className='mon-semibold text-base text-gray-700 active:text-yellow-500 group-hover:text-black uppercase'>about</h3></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navber
