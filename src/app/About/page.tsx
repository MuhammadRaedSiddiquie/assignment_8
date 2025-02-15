import React from 'react'

const page = () => {
    return (
        <section className='w-full flex items-center justify-center py-8 sm:py-16'>
            <div className='w-full max-w-4xl px-4 sm:px-8 flex flex-col gap-4'>
                <h1 className='text-2xl sm:text-4xl font-poppins font-bold text-gray-800'>About Us</h1>
                <p className='font-poppins text-gray-600 text-base sm:text-lg'>Welcome to [Your Blog Name], your go-to destination for insightful and inspiring content about Pakistan’s rich history, breathtaking travel destinations, delicious cuisine, and adventurous activities. Whether you’re a history buff, a foodie, or an adventure seeker, our blog brings you well-researched and engaging articles to fuel your curiosity and wanderlust.</p>
                <h2 className='mt-6 text-xl sm:text-2xl text-black font-poppins font-bold'>Our Mission</h2>
                <ul className='list-disc flex flex-col gap-2 pl-5'>
                    <p className='font-poppins text-gray-600 text-base sm:text-lg'>At Blogistan, we aim to:</p>
                    <li className='font-poppins text-gray-600 text-base'>Showcase Pakistan’s diverse culture, heritage, and natural beauty.</li>
                    <li className='font-poppins text-gray-600 text-base'>Provide valuable travel guides and tips for explorers.</li>
                    <li className='font-poppins text-gray-600 text-base'>Highlight local cuisines and street food experiences.</li>
                    <li className='font-poppins text-gray-600 text-base'>Inspire adventure enthusiasts with thrilling activities across the country.</li>
                </ul>
                <h2 className='mt-6 text-xl sm:text-2xl text-black font-poppins font-bold'>What We Cover</h2>
                <ul className='list-disc flex flex-col gap-2 pl-5'>
                    <li className='font-poppins text-gray-600 text-base'>Historical Places – Explore ancient forts, palaces, and UNESCO heritage sites.</li>
                    <li className='font-poppins text-gray-600 text-base'>Tourist Destinations – Discover the hidden gems and must-visit places in Pakistan.</li>
                    <li className='font-poppins text-gray-600 text-base'>Food Culture – Dive into the world of traditional and modern Pakistani cuisine.</li>
                    <li className='font-poppins text-gray-600 text-base'>Adventure Activities – Experience the thrill of trekking, paragliding, and more.</li>
                </ul>
                <h2 className='mt-6 text-xl sm:text-2xl text-black font-poppins font-bold'>Why Choose Us?</h2>
                <p className='font-poppins text-gray-600 text-base sm:text-lg'>With a passion for storytelling and a love for exploring, we ensure that every blog post is authentic, informative, and captivating. Our goal is to make your journey to Pakistan unforgettable, whether through virtual exploration or real-life adventures.</p>
                <h2 className='mt-6 text-xl sm:text-2xl text-black font-poppins font-bold'>Join Us on This Journey!</h2>
                <p className='font-poppins text-gray-600 text-base sm:text-lg'>We love hearing from our readers! Connect with us on social media, share your experiences, and feel free to drop suggestions on topics you’d love to see on our blog.</p>
            </div>
        </section>
    )
}
export default page