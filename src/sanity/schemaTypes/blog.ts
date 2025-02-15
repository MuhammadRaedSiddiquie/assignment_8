import { defineField, defineType } from "sanity"

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "desc",
      title: "Description",
      type: "array",
      of: [{ type: "block" }], // Allows rich text formatting
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: "Blog Category",
      name: "category",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Historical", value: "historical" },
          { title: "Tourism", value: "tourism" },
          { title: "Food", value: "food" },
          { title: "Activities", value: "activities" },
          { title: "Guide", value: "guide" },
        ],
      },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
  ],
});
