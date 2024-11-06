// pages/blog.js
//import Link from 'next/link';
import { notFound } from "@/node_modules/next/navigation";
const ProductDetails = ({ params }) => {
  const productData: any = {
    title: "How to build a blog with Next.js and Tailwind",
    slug: "build-blog-nextjs-tailwind",
    excerpt:
      "Learn how to create a simple blog using Next.js and Tailwind CSS.",
    date: "October 28, 2024",
  };
 
  if (params.reviewId > 8) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Product Details-{params.productId} Review-{params.reviewId}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          key={productData.slug}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-2">{productData.title}</h2>
          <p className="text-gray-700 mb-4">{productData.excerpt}</p>
          <p className="text-gray-500 text-sm mb-4">{productData.date}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
