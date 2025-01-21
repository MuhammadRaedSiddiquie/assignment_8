import Image from 'next/image'
import React from 'react'
import { CgComment } from 'react-icons/cg'
import { FaClock } from 'react-icons/fa'

const BlogCard = ({ imageUrl, title, desc,date }: { imageUrl: string, title: string, desc: string ,date:string}) => {
    return (

        <div className="w-[400px] h-[400px] rounded bg-gray-300 overflow-hidden shadow-lg flex flex-col">
            <Image src={imageUrl} alt="pic" width={400} height={300} className="object-top object-cover"></Image>
            <div className="w-full flex flex-col gap-4 px-5 py-6">
                <h1 className="font-medium text-xl inline-block hover:text-indigo-600 transition duration-500">{title}</h1>
                <p className="text-gray-500 text-sm line-clamp-2">
                    {desc}
                </p>
                <div className="w-full flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                        <FaClock></FaClock>
                        <p className="text-sm text-black">{date.slice(0,10)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CgComment></CgComment>
                        <p className="text-sm text-black">40</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default BlogCard