"use client";
import { useState } from "react";
import Link from "next/link";

import Header from "@/components/Header";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      title: "How to build a blog with Next.js and Tailwind",
      slug: "build-blog-nextjs-tailwind",
      excerpt:
        "Learn how to create a simple blog using Next.js and Tailwind CSS.",
      date: "October 28, 2024",
    },
    {
      id: 2,
      title: "Understanding Server Components in Next.js",
      slug: "server-components-nextjs",
      excerpt: "A deep dive into server components in Next.js.",
      date: "November 1, 2024",
    },
    {
      id: 3,
      title: "Understanding Client Components in Next.js",
      slug: "client-components-nextjs",
      excerpt: "A deep dive into client components in Next.js.",
      date: "November 5, 2024",
    },
    // Add more products if needed
  ];

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Blogs</h1>
        {/* Search Filter */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((post) => (
              <div
                key={post.slug}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <Link
                  href={`/products/${post.id}`}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Read more
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
