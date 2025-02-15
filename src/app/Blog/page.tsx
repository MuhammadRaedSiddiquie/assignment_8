import React from 'react'
import Blogs from '../component/Blogs/Blogs'
import { client } from '@/sanity/lib/client';
async function getData() {
  const fetchData = await client.fetch(`
    *[_type == 'blog']{
      title,
      desc,
      "imageUrl": image.asset->url,
      _createdAt,
      category,
      "slug": slug.current
    }
  `);
  return fetchData;
}
const page =async () => {
  const blogs = await getData();
  return (
    <section className='w-full flex items-center justify center'>
      <Blogs title="Blogs" blogs={blogs} />
    </section>
  )
}

export default page