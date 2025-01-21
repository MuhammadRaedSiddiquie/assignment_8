
import React from 'react'
import BlogCard from '../component/BlogCard/BlogCard'
import { client } from "@/sanity/lib/client";



interface BlogProps {
    title: string;
    desc: string;
    imageUrl: string;
    _createdAt:string;
    category:string;
}

async function getData() {
    const fetchData = await client.fetch(`*[_type == 'blog']{
      title,
        desc,
        "imageUrl":image.asset->url,
        _createdAt,
        category
      
      
    }[0...3] `);
    return fetchData;
}
async function HistoricalPlaces({title}:{title:string}) {
    const blogData: BlogProps[] = await getData();
    
    return (
        <section className="w-full flex justify-center py-20">
            <div className='max-w-[90%] w-full flex flex-col items-center gap-20'>
                <div className='w-full flex flex-col items-center'>
                    <h1 className='mon-bold text-4xl text-gray-800 uppercase'>{title}</h1>

                </div>
                <div className="w-full grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {
                        blogData.filter((blog:any)=>blog.category==='historical').map((blogs: any) => (
                            <BlogCard
                                key={blogs.title}
                                imageUrl={blogs.imageUrl}
                                title={blogs.title}
                                desc={blogs.desc}
                                date={blogs._createdAt}
                            ></BlogCard>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default HistoricalPlaces