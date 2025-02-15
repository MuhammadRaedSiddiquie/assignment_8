"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WriteBlogPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    slug: "",
    image: "",
    category: [] as string[],
    tags: [] as string[],
    publishedAt: new Date().toISOString(),
    author: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedCategories = checked
        ? [...prev.category, value]
        : prev.category.filter((cat) => cat !== value);
      return { ...prev, category: updatedCategories };
    });
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      tags: value.split(",").map((tag) => tag.trim()),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/create-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create blog");
      }

      const result = await response.json();
      router.push(`/blogs/${result.slug.current}`); // Redirect to the new blog post
    } catch (err) {
      setError("Error creating blog. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:py-12 sm:px-6">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6">Write a New Blog</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="desc"
            id="desc"
            value={formData.desc}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {/* Slug */}
        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
            Slug (Optional)
          </label>
          <input
            type="text"
            name="slug"
            id="slug"
            value={formData.slug}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <div className="mt-2 space-y-2">
            {["historical", "tourism", "food", "activities", "guide"].map((cat) => (
              <div key={cat} className="flex items-center">
                <input
                  type="checkbox"
                  id={cat}
                  name="category"
                  value={cat}
                  checked={formData.category.includes(cat)}
                  onChange={handleCategoryChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor={cat} className="ml-2 text-sm text-gray-700">
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
            Tags (Comma-separated)
          </label>
          <input
            type="text"
            name="tags"
            id="tags"
            value={formData.tags.join(", ")}
            onChange={handleTagsChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}