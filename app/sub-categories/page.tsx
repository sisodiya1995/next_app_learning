"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Header from "@/components/Header";
// Define types for category and subcategory data
interface Category {
  _id: string;
  name: string;
  __v: number;
}

interface Subcategory {
  _id: string;
  name: string;
  category: Category;
  __v: number;
}

export default function SubcategoriesPage() {
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}subcategories`
        ); // Adjust the URL if necessary
        const data = await response.json();
        setSubcategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubcategories();
  }, []);

  //   if (loading) return <p>Loading...</p>;

  // Group subcategories by their category ID
  const groupedByCategory = subcategories.reduce((acc, subcategory) => {
    if (!subcategory || !subcategory.category) {
      return acc; // Skip if subcategory or category is missing
    }
    const { _id, name } = subcategory?.category;
    // Skip if _id is null or undefined

    if (!acc[_id]) {
      acc[_id] = { categoryName: name, subcategories: [] };
    }
    acc[_id].subcategories.push(subcategory);
    return acc;
  }, {} as Record<string, { categoryName: string; subcategories: Subcategory[] }>);

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold mb-4">
            Category Breakdown with Subcategory
          </h1>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-600 transition">
            <Link href="/add-subcategory">Add Sub Category</Link>
          </button>
        </div>

        {Object.entries(groupedByCategory).map(
          ([categoryId, { categoryName, subcategories }]) => (
            <div key={categoryId} className="mb-6">
              <h2 className="text-xl font-semibold">{categoryName}</h2>
              <ul className="ml-4 list-disc">
                {subcategories.map((subcategory) => (
                  <li key={subcategory._id} className="text-gray-700">
                    {subcategory.name}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </>
  );
}
