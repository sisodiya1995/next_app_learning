"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import Header from "@/components/Header";
const EditCategory = ({ params }) => {
  const id = params.id;
  const [categoryName, setCategoryName] = useState("");
  const router = useRouter();
  // Fetch the category data when the component loads
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}categories/category/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setCategoryName(data.name);
        } else {
          console.error("Failed to fetch category data");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchCategory();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const categoryData = { name: categoryName };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}categories/category/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(categoryData),
        }
      );

      if (response.ok) {
        //toast.success("Category successfully Updated!");
        router.push("/categories"); // Redirect to category listing
      } else {
        console.error("Failed to add category");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
        >
          {" "}
          <h1 className="text-2xl font-bold mb-4">Update Category</h1>
          <div>
            <label className="block text-gray-700">Category Name</label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <br />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Update Category
          </button>
        </form>
      </div>
    </>
  );
};

export default EditCategory;
