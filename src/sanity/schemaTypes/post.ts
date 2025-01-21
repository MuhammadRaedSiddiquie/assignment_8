import { defineField, defineType } from "sanity";

export default defineType({
    name: "post",
    title: "Blog",
    type: "document",
    fields:[
        defineField({
            name: "title",
            title: "Title",
            type: "string"
        }),
    ]
})