const productSchema = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "string",
      description: "Unique identifier for the product.",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the product.",
      validation: (Rule) => Rule.required().max(100), // Ensures the field is required and has a max length
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "A detailed description of the product.",
      validation: (Rule) => Rule.required().min(10).max(1000), // Adds min/max validation for the description
    },
    {
      name: "price",
      title: "Price",
      type: "string", // Use "number" instead of "string" for numerical data
      description: "Price of the product.",
      validation: (Rule) => Rule.required().min(0), // Ensures price is positive
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Enables hotspot for better cropping and resizing
      },
      description: "Product image.",
      validation: (Rule) => Rule.required(), // Ensures an image is uploaded
    },
  ],
};

export default productSchema;
