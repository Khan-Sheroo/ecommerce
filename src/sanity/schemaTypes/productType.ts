import { TrolleyIcon } from "@sanity/icons";
import { defineField } from "sanity";
export default {
    name: 'productType',
    title: 'Product type',
    type: 'document',
    fields: [
        defineField({
            name: "name",
            title: "Product name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }) ,   
        defineField({
            name: "slug",
            title: "slug",
            type: "slug",
            options: {
                source:"name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Product Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "descripition",
            title: "descripition",
            type: "number",
        }),
    ],
};