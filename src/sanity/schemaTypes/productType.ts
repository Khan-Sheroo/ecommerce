import { TrolleyIcon } from "@sanity/icons";
import { defineField } from "sanity";
export default {
    name: 'product',
    title: 'Products',
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
            title: "Slug",
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
            title: "Descripition",
            type: "text",
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{type: "reference", to: {type:"category"}}],
        }),
        defineField({
            name: "stock",
            title: "Stock",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
    ],
    preview: {
        select: {
            title: "Name",
            media: "image",
            subtitle: "price",
        },
        prepare(select: any) {
            return {
                title: select.title,
                subtitle: `$${select.subtitle}`,
                media: select.media,
            };
        },
    },
};