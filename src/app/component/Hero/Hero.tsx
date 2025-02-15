import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className='w-screen flex items-center justify-center'>
            <div className='w-full h-[80vh] flex items-center justify-center relative'>
                <Image src={'https://images.unsplash.com/photo-1627292601963-76ab82dabc78?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    alt='pic' fill className='absolute object-center object-cover'>
                </Image>
                <h1 className='text-5xl text-white mon-bold absolute z-10 text-center'>Discover Pakistan</h1>

            </div>
        </section>
    )
}

export default Hero