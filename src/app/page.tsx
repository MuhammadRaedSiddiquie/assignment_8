import { client } from "@/sanity/lib/client";
import Hero from "./component/Hero/Hero";
import Blogs from "./component/Blogs/Blogs";

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

export default async function Home() {
  const blogs = await getData(); // Fetch once

  return (
    <main className="w-full flex flex-col items-center">
      <Hero />
      <Blogs title="Trending Blogs" blogs={blogs.slice(0,3)} />
      <Blogs title="Historical Places" blogs={blogs.filter((blog:any) => blog.category.some((cat: string) => cat === "historical"))}  />
      <Blogs title="Cultural Foods" blogs={blogs.filter((blog:any) => blog.category.some((cat: string) => cat === "food"))}  />
    </main>
  );
}
