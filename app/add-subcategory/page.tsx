"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import { get } from "../../api";

const AddSubCategoryForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [category, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories to populate the dropdown

    const fetchCategories = async () => {
      const response: any = await get(
        `${process.env.NEXT_PUBLIC_API_URL}categories`
      );

      setCategories(response?.data);
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}subCategories/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, category }),
      }
    );

    const result: any = await response.json();

    if (result) {
      router.push("/sub-categories");
      //alert(result.message);
      setName("");
      setCategoryId("");
    } else {
      alert("Error: " + result.error);
    }
  };

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-6 mt-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Add Subcategory
        </h2>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Subcategory Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter subcategory name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Category:
          </label>
          <select
            value={category}
            onChange={(e) => setCategoryId(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map((category: any) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Subcategory
        </button>
      </form>
    </>
  );
};

export default AddSubCategoryForm;
