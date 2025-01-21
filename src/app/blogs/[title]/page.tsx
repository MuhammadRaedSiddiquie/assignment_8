import BlogCard from '@/app/component/BlogCard/BlogCard'
import { client } from '@/sanity/lib/client';
import React from 'react'

interface BlogProps{
  title:string;
  desc:string;
  imageUrl:string;
  _createdAt:string
}
async function getData(){
  const fetchData=await client.fetch(`*[_type == 'blog']{
    title,
      desc,
      "imageUrl":image.asset->url,
      _createdAt

  } `);
   return fetchData;
}
const page= async ({ params }: { params: { title: string } })=>{
    const blogData: BlogProps[] = await getData();
    const title=await params
    
  return (
    <section className="w-full flex justify-center py-20">
    <div className='max-w-[90%] w-full flex flex-col items-center gap-20'>
        <div className='w-full flex flex-col items-center'>
            <h1 className='mon-bold text-4xl text-gray-800 uppercase'>{title.title}</h1>

        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {
                blogData.map((blogs: any) => (
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

export default page