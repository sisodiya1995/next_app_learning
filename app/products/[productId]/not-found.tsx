"use client";

import { useRouter } from "next/navigation";

const RiNotFound = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <p className="text-2xl text-gray-600 mb-8">Oops! blog is not found.</p>
      <a
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        onClick={() => {
          console.log("go home");
          router.push("/products");
        }}
      >
        Go Back Home
      </a>
    </div>
  );
};

export default RiNotFound;
