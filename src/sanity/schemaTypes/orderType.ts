import { BasketIcon } from "@sanity/icons";
import { Rule } from "postcss";
import { defineType, defineField, defineArrayMember } from "sanity"; 


export const orderType = defineType({
    name: "order",
    title: "order",
    type: "document",
    icon: BasketIcon,
    fields: [
        defineField({
          name: 'orderNumber',
          title: 'Order Number',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'stripeCheckoutSessionId',
            title: 'Stripe Session Checkout ID',
            type: 'string',
        }),
        defineField({
          name: 'stripeCustomerID',
          title: 'Stripe Customser ID',
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'products',
            title: 'Products',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'product',
                            title: 'Product Bought',
                            type: 'reference',
                            to: [{ type: 'product'}],

                        }),
                        defineField({
                            name: 'quantity',
                            title: 'Quantity Purchased',
                            type: 'number',
                        }),
                    ],
                    preview: {
                        select: {
                            product: 'product.name',
                            quantity: 'quantity',
                            image: 'product.image',
                            price: 'product.price',
                            curreny: 'product.currency',

                        },
                        prepare(select) {
                            return {
                                title: '${select.product} x ${select.quantity}',
                                subtitle: '${select.price * select.quantity}',
                                media: select.image,
                            };
                        },
                    },
                }),
            ],
        }),
        defineField({
            name: 'totalPrice',
            title: 'Total Price',
            type: 'number',
            validation: (Rule) => Rule.required(),

        }),
        defineField({
            name: 'currency',
            title: 'Currency',
            type: 'string',
            validation: (Rule) => Rule.required(),

        }),
        defineField({
            name: 'amountDiscount',
            title: 'Amount Discount',
            type: 'number',
            validation: (Rule) => Rule.min(0),

        }),
        defineField({
            name: 'status',
            title: 'Order Status',
            type: 'string',
            options: {
                list: [
                    {title: 'Pending', value: 'pending'},
                    {title: 'Paid', value: 'paid'},
                    {title: 'Shipped', value: 'shipped'},
                    {title: 'Delievered', value: 'delievered'},
                    {title: 'Cancelled', value: 'cancelled'},

                ],
            },
        }),
        defineField({
            name: 'orderDate',
            title: 'Order Date',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
    ],
});