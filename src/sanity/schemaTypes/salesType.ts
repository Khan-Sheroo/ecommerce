import { TagIcon } from "@sanity/icons";
import { title } from "process";
import { defineType, defineField } from "sanity";

export const salesType = defineType({
    name: "sale",
    title: 'Sale',
    type: 'document',
    icon: TagIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Sale Title',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Sale Description',
        }),
        defineField({
            name: 'discountAmount',
            type: 'number',
            title: 'Discount Amount',
            description: 'Amount off in percentagr or fixed value',


        }),
        defineField({
            name: 'couponCode',
            type: 'string',
            title: 'Coupon Code',
        


        }),
        defineField({
            name: 'validFrom',
            type: 'dateTime',
            title: 'Valid From',
        


        }),
        defineField({
            name: 'validUntil',
            type: 'dateTime',
            title: 'Valid Until',
        


        }),
        defineField({
            name: 'isActive',
            type: 'boolean',
            title: 'Is Active',
            description: "Toggle to activate/deactivate the sale",
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: "title",
            discountAmount: "discountAmount",
            couponCode: "couponCode",
            isActive: "isActive",
        },
        prepare(selection) {
            const {title, discountAmount, couponCode, isActive } = selection
            const status = isActive ? "Active" : "inActive";
            return {
                title,
                subtitle: `${discountAmount}% off - Code: ${couponCode} - ${status}`,
            };
        },
    },
});