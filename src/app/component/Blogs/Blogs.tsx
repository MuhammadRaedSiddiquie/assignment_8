import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import { PortableText } from "@portabletext/react";

interface BlogProps {
  title: string;
  desc: any[];
  imageUrl: string;
  _createdAt: string;
  category: string;
  slug:string;
}

function Blogs({ title, blogs }: { title: string; blogs: BlogProps[] }) {
  return (
    <section className="w-full flex justify-center py-10 md:py-20">
      <div className="w-full max-w-6xl px-4 md:px-8 flex flex-col items-center gap-10 md:gap-20">
        <div className="w-full flex flex-col items-center">
          <h1 className="mon-bold text-2xl md:text-4xl text-gray-800 uppercase">{title}</h1>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <BlogCard
                key={blog.title}
                imageUrl={blog.imageUrl}
                title={blog.title}
                desc={blog.desc}
                date={blog._createdAt}
                slug={blog.slug}
              />
            ))
          ) : (
            <p className="text-gray-500">No blogs available.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
