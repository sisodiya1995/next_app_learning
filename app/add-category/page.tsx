"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Header from "@/components/Header";
const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const categoryData = { name: categoryName };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}categories/add`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(categoryData),
        }
      );
     // toast.success("Category successfully Added!");
      if (response.ok) {
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
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
        >
          {" "}
          <h1 className="text-2xl font-bold mb-4">Add Category</h1>
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
            Add Category
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCategory;
