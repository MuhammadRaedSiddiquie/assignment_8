"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";

interface Blog {
  _id:any;
  title: string;
  desc: any[];
  imageUrl: string;
  _createdAt: string;
  category: string;
}

export default function BlogPageClient() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    if (!slug) {
      setError("Slug not found in URL");
      setLoading(false);
      return;
    }

    async function fetchBlog() {
      try {
        const blogData = await client.fetch(
          `*[_type == "blog" && slug.current == $slug][0]{
          _id,
            title,
            desc[], 
            "imageUrl": image.asset->url,
            _createdAt,
            category
          }`,
          { slug }
        );

        if (!blogData) {
          setError("Blog not found");
        } else {
          setBlog(blogData);
        }
      } catch (err) {
        setError("Failed to fetch blog data");
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [slug]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!blog) {
    return <p className="text-center text-gray-500">Blog not found</p>;
  }
  const deleteBlog = async (blogId: string) => {
    try {
      const res = await fetch("/api/delete-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blogId }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Blog deleted successfully!");
        // Optionally, refresh the page or update state
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Failed to delete blog", error);
    }
  };

  const myPortableTextComponents = {
    types: {
      image: ({ value }: any) => (
        <img src={value.asset.url} alt="Embedded Image" className="w-full h-auto" />
      ),
    },
    marks: {
      strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
      em: ({ children }: any) => <em className="italic">{children}</em>,
    },
    block: {
      h1: ({ children }: any) => <h1 className="text-3xl font-bold">{children}<br /></h1>,
      h2: ({ children }: any) => <h2 className="text-2xl font-semibold">{children}<br /></h2>,
      h3: ({ children }: any) => <h3 className="text-xl font-medium">{children}<br /></h3>,
      normal: ({ children }: any) => <p className="text-base whitespace-pre-line">{children}<br /></p>,
    },
  };

  return (
    <main className="max-w-3xl mx-auto py-18 px-4 sm:py-12 sm:px-6">
      <h1 className="text-2xl sm:text-4xl font-bold">{blog.title}</h1>
      <p className="text-gray-500 text-sm mt-2">{new Date(blog._createdAt).toDateString()}</p>

      <div className="relative w-full h-48 sm:h-64 my-6">
        <Image src={blog.imageUrl} alt={blog.title} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>

      {/* Use blog.desc instead of desc */}
      <PortableText value={blog.desc || []} components={myPortableTextComponents} />
      {/* <button
        onClick={() => deleteBlog(blog._id)}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete Blog
      </button> */}

    </main>
  );
}