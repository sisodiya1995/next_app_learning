// components/Header.tsx
"use client";
import { useRouter } from "next/navigation";
import nookies from "nookies";

const NonAuthHeader = () => {
  const router = useRouter();

  return (
    <header className="bg-indigo-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          MyApp
        </div>
        <p className="text-gray-200">Welcome to MyApp</p>
      </div>
    </header>
  );
};

export default NonAuthHeader;
