"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { get } from "../../api";
import Header from "@/components/Header";

const Blog = () => {
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const response: any = await get(
        `${process.env.NEXT_PUBLIC_API_URL}categories`
      );
      console.log(response, "14 blog");
    };

    fetchData();
  }, []);
  const posts = [
    {
      title: "How to build a blog with Next.js and Tailwind",
      slug: "build-blog-nextjs-tailwind",
      excerpt:
        "Learn how to create a simple blog using Next.js and Tailwind CSS.",
      date: "October 28, 2024",
    },
    {
      title: "Optimizing performance in React applications",
      slug: "optimizing-performance-react",
      excerpt:
        "Techniques to improve the performance of your React applications.",
      date: "October 20, 2024",
    },
    // Add more posts here
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            console.log("go home");
            router.push("/");
          }}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Go Home
        </button>
      </div>
    </>
  );
};

export default Blog;
