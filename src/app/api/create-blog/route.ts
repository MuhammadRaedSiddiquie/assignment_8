import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.title || !data.desc || !data.category) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    // Generate a slug if not provided
    const slug = data.slug || nanoid(10);

    const blog = await client.create({
      _type: "blog",
      title: data.title,
      desc: [{ _type: "block", children: [{ _type: "span", text: data.desc }] }],
      slug: { _type: "slug", current: slug },
      image: data.image || null,
      category: data.category,
      tags: data.tags || [],
      publishedAt: data.publishedAt || new Date().toISOString(),
      
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json({ message: "Error creating blog", error }, { status: 500 });
  }
}