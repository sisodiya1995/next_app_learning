"use client";

import Link from "next/link";
import AuthWrapper from "@/components/AuthWrapper";
import Header from "@/components/Header";
export default function Home() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to Our Amazing Site
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Build modern websites effortlessly with Next.js and Tailwind CSS.
            Fast, responsive, and easy to customize.
          </p>
          <Link href="/blog">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Explore Our Services
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4 text-blue-500">
                {/* Replace with an icon */}
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Fast Development
              </h3>
              <p className="text-gray-600">
                Develop websites quickly with a powerful combination of Next.js
                and Tailwind CSS.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4 text-green-500">
                {/* Replace with an icon */}
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12h18m-9-9v18"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Modern Design
              </h3>
              <p className="text-gray-600">
                Achieve a modern, sleek design for your website with Tailwind's
                utility-first approach.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4 text-yellow-500">
                {/* Replace with an icon */}
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V9a3 3 0 00-3-3H7a3 3 0 00-3 3v4m16 0v6a3 3 0 01-3 3H7a3 3 0 01-3-3v-6m16 0H4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Fully Responsive
              </h3>
              <p className="text-gray-600">
                Ensure your website looks great on any device with responsive
                design out of the box.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Get Started Today!
          </h2>
          <p className="text-lg text-blue-200 mb-8">
            Contact us to learn how we can help build your next project.
          </p>
          {/* <Link href="/contact"> */}
          <a className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300">
            Contact Us
          </a>
          {/* </Link> */}
        </div>
      </section>
    </div>
  );
}
