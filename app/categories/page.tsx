"use client";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Link from "next/link";
import { get } from "../../api";

export default function Categories() {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    try {
      const response: any = await get(
        `${process.env.NEXT_PUBLIC_API_URL}categories`
      );

      setData(response?.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (!data) return <p>Loading...</p>;
  // Delete a category by ID
  const handleDeleteCategory = async (id: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}categories/category/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Failed to delete category");

      fetchData(); // Refetch data after deletion
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex justify-between mb-4">
          {" "}
          <h1 className="text-2xl font-bold mb-4">Categories</h1>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-600 transition">
            <Link href="/add-category">Add</Link>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data &&
            data.map((industry: any) => (
              <div
                key={industry._id}
                className="p-4 border rounded shadow hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold">{industry.name}</h2>
                <p className="text-gray-500">ID: {industry._id}</p>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-600 transition">
                  <Link href={`/edit-category/${industry._id}`}>Edit</Link>
                </button>
                <button
                  onClick={() => handleDeleteCategory(industry._id)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition ml-2"
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
