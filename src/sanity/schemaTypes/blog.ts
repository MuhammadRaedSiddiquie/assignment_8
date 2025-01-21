import { defineField, defineType } from "sanity"

export default defineType({

    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string"
        }),
        defineField({
            name: "desc",
            title: "Description",
            type: "text"
        }),
        // defineField({
        //     name: "slug",
        //     title: "Slug",
        //     type: "slug",
        //     options: {
        //         source: 'title',
        //         maxLength: 200
        //     }
        // }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options:{
                hotspot:true
            }
        }),
        
{
    title: 'Blog Category',
    name: 'category',
    type: 'string',
    initialValue: 'tourism',
    options: {
      list: [
        { title: 'Historical', value: 'historical' },
        { title: 'Tourism', value: 'tourism' },
        { title: 'Food', value: 'food' },
        { title: 'Activities', value: 'activities' },
        { title: 'Guide', value: 'guide' },
        
      ], 
    }
},

    ]

})