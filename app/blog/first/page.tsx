// pages/blog/[slug].js
// import { useRouter } from 'next/router';
// import Link from 'next/link';

const BlogPost = () => {
  //   const router = useRouter();
  //   const { slug } = router.query;

  // Dummy blog post data based on slug (you'd fetch real data in a real app)
  const post = {
    title: "How to Build a Blog with Next.js and Tailwind",
    content: `
      In this guide, we will cover how to create a blog using Next.js and Tailwind CSS. 
      We'll start by setting up a new Next.js project, integrating Tailwind, and 
      creating components for displaying blog posts. Tailwind's utility-first 
      approach allows for rapid styling of components while keeping your styles modular.
      Let's dive in!
    `,
    date: "October 28, 2024",
    author: "John Doe",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-4">
          {post.date} • Written by {post.author}
        </p>
        <div className="text-lg text-gray-800 mb-6 whitespace-pre-line">
          {post.content}
        </div>
        {/* <a href="/blog">
          <a className="text-blue-500 hover:text-blue-600">← Back to Blog</a>
        </a> */}
      </div>
    </div>
  );
};

export default BlogPost;
