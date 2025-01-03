import { defineField, defineType, defineArrayMember } from "sanity";

const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the product",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Unique slug for the product",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Description of the product",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Image of the product",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the product",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contact",
      title: "Contact",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      description: "Contact information for the product",
    }),
  ],
});

export default product;
