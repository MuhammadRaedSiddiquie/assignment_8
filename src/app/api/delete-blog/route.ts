import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; // Adjust the import path if needed

export async function POST(req: NextRequest) {
  try {
    const { blogId } = await req.json();

    if (!blogId) {
      return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
    }

    // Delete the blog post
    await client.delete(blogId);

    return NextResponse.json({ message: "Blog deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete blog", details: error }, { status: 500 });
  }
}
